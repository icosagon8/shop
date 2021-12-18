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
    return this.cartService.getCartSize();
  }

  get productsCost(): number {
    return this.cartService.getProductsCost();
  }

  trackByItems(index: number, item: ProductModel): number {
    return item.id;
  }
}
