import { Component, DoCheck } from '@angular/core';

import { CartData, CartProductModel } from '../../../shared/models/shared.models';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements DoCheck {
  products: CartProductModel[] = [];
  cartData!: CartData;
  isAsc = true;
  selectedValues = ['name'];

  sortOptions: { displayName: string; key: string }[] = [
    { displayName: 'Name', key: 'name' },
    { displayName: 'Price', key: 'totalSum' },
    { displayName: 'Quantity', key: 'quantity' },
  ];

  constructor(private cartService: CartService) {}

  ngDoCheck(): void {
    this.products = this.cartService.getProducts();
    this.cartData = this.cartService.getCartData();
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
    return this.cartData.totalQuantity;
  }

  get totalSum(): number {
    return this.cartData.totalSum;
  }
}
