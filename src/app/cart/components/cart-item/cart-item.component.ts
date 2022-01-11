import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CartProductModel } from '../../../shared/models/shared.models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() product: CartProductModel;

  @Output() increaseQuantity = new EventEmitter<CartProductModel['id']>();
  @Output() decreaseQuantity = new EventEmitter<CartProductModel['id']>();
  @Output() removeProduct = new EventEmitter<CartProductModel['id']>();

  onIncreaseQuantity(): void {
    this.increaseQuantity.emit(this.product.id);
  }

  onDecreaseQuantity(): void {
    this.decreaseQuantity.emit(this.product.id);
  }

  onRemoveProduct(): void {
    this.removeProduct.emit(this.product.id);
  }

  get isDisabled(): boolean {
    return this.product.quantity === 1;
  }

  // это уже не прайс, это уже тотал
  get price(): number {
    return this.product.price * this.product.quantity;
  }
}
