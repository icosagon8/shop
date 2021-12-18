import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../../shared/models/shared.models';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

  get cartSize(): number {
    return this.products.length;
  }

  trackByItems(index: number, item: ProductModel): number {
    return item.id;
  }
}
