import { Component } from '@angular/core';

import { ProductModel } from '../../../shared/models/shared.models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  products: ProductModel[] = [];

  constructor(private cartService: CartService) {
    this.products = cartService.getProducts();
  }

  get cartSize() {
    return this.products.length;
  }

  trackByItems(index: number, item: ProductModel): string {
    return item.name;
  }
}
