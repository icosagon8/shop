import { Injectable } from '@angular/core';
import { ProductModel } from '../../shared/models/shared.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: ProductModel[] = [];

  addToCard(product: ProductModel): void {
    this.products.push(product);
  }

  getProducts(): ProductModel[] {
    return this.products;
  }

  getCartSize(): number {
    return this.products.length;
  }

  getProductsCost(): number {
    return this.products.reduce((cost, product) => cost + product.price, 0);
  }
}
