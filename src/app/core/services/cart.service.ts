import { Injectable } from '@angular/core';

import { CartProductModel, ProductModel } from '../../shared/models/shared.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: CartProductModel[] = [];

  addToCard(product: ProductModel): void {
    const shoppingCartProduct = this.products.find((cartProduct) => cartProduct.id === product.id);

    if (shoppingCartProduct) {
      this.increaseQuantity(shoppingCartProduct.id);
    } else {
      this.products = [
        ...this.products,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ];
    }
  }

  getProducts(): CartProductModel[] {
    return this.products;
  }

  getCartSize(): number {
    return this.products.reduce((cartSize, product) => product.quantity + cartSize, 0);
  }

  getProductsCost(): number {
    return this.products.reduce((cost, product) => cost + product.quantity * product.price, 0);
  }

  increaseQuantity(id: CartProductModel['id']): void {
    this.changeQuantity(id, 1);
  }

  decreaseQuantity(id: CartProductModel['id']): void {
    this.changeQuantity(id, -1);
  }

  removeProduct(id: CartProductModel['id']): void {
    this.products = this.products.filter((product) => product.id !== id);
  }

  private changeQuantity(id: CartProductModel['id'], quantity: number): void {
    this.products = this.products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + quantity,
        };
      }

      return product;
    });
  }
}
