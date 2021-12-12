import { Injectable } from '@angular/core';
import { ProductModel } from '../../shared/models/shared.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: ProductModel[] = [];

  addToCard(product: ProductModel) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }
}
