import { Injectable } from '@angular/core';

import { CartProductModel, ProductModel } from '../../shared/models/shared.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: CartProductModel[] = [];
  totalQuantity: number;
  totalSum: number;

  getProducts(): CartProductModel[] {
    return this.cartProducts;
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

  private changeTotalQuantity(): void {
    this.totalQuantity = this.cartProducts.reduce((cartSize, product) => product.quantity + cartSize, 0);
  }

  private changeTotalSum(): void {
    this.totalSum = this.cartProducts.reduce((cost, product) => cost + product.totalSum, 0);
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
  }
}
