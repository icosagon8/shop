import { Component, DoCheck } from '@angular/core';

import { CartProductModel } from '../../../shared/models/shared.models';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements DoCheck {
  products: CartProductModel[] = [];

  constructor(private cartService: CartService) {}

  ngDoCheck(): void {
    this.products = this.cartService.getProducts();
  }

  trackByItems(index: number, item: CartProductModel): number {
    return item.id;
  }

  onIncreaseQuantity(id: CartProductModel['id']): void {
    this.cartService.increaseQuantity(id);
  }

  onDecreaseQuantity(id: CartProductModel['id']): void {
    this.cartService.decreaseQuantity(id);
  }

  onRemoveProduct(id: CartProductModel['id']): void {
    this.cartService.removeProduct(id);
  }

  onRemoveAllProducts(): void {
    this.cartService.removeAllProducts();
  }

  get totalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  get totalSum(): number {
    return this.cartService.totalSum;
  }
}
