import { Injectable } from '@angular/core';

import { CartData, CartProductModel, ProductModel } from '../../shared/models/shared.models';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: CartProductModel[] = [];
  cartData: CartData = { totalQuantity: 0, totalSum: 0 };

  constructor(private localStorage: LocalStorageService) {
    this.getProducts();
  }

  getProducts(): CartProductModel[] {
    const cartProducts = this.localStorage.getItem('cart');

    if (cartProducts) {
      this.cartProducts = JSON.parse(cartProducts);
    }

    return this.cartProducts;
  }

  getCartData(): CartData {
    const cartData = this.localStorage.getItem('cartData');

    if (cartData) {
      this.cartData = JSON.parse(cartData);
    }

    return this.cartData;
  }

  addProduct(product: ProductModel): void {
    const shoppingCartProduct = this.cartProducts.find((cartProduct) => cartProduct.id === product.id);

    if (shoppingCartProduct) {
      this.increaseQuantity(shoppingCartProduct.id);
    } else {
      this.cartProducts = [
        ...this.cartProducts,
        {
          id: product.id,
          name: product.name,
          totalSum: product.price,
          quantity: 1,
        },
      ];
      this.updateCartData();
    }
  }

  removeProduct(id: CartProductModel['id']): void {
    this.cartProducts = this.cartProducts.filter((product) => product.id !== id);
    this.updateCartData();
  }

  increaseQuantity(id: CartProductModel['id']): void {
    this.changeQuantity(id, 1);
  }

  decreaseQuantity(id: CartProductModel['id']): void {
    this.changeQuantity(id, -1);
  }

  removeAllProducts(): void {
    this.cartProducts = [];
    this.updateCartData();
  }

  isEmptyCart(): boolean {
    return this.cartProducts.length === 0;
  }

  private changeTotalQuantity(): void {
    const totalQuantity = this.cartProducts.reduce((cartSize, product) => product.quantity + cartSize, 0);
    this.cartData = { ...this.cartData, totalQuantity };
  }

  private changeTotalSum(): void {
    const totalSum = this.cartProducts.reduce((cost, product) => cost + product.totalSum, 0);
    this.cartData = { ...this.cartData, totalSum };
  }

  private changeQuantity(id: CartProductModel['id'], quantity: number): void {
    this.cartProducts = this.cartProducts.map((product) => {
      if (product.id === id) {
        const cartProductQuantity = product.quantity + quantity;

        return {
          ...product,
          totalSum: (product.totalSum / product.quantity) * cartProductQuantity,
          quantity: cartProductQuantity,
        };
      }

      return product;
    });

    this.updateCartData();
  }

  private updateCartData(): void {
    this.changeTotalQuantity();
    this.changeTotalSum();
    this.localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.localStorage.setItem('cartData', JSON.stringify(this.cartData));
  }
}
