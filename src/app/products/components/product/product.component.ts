import { Component, Input } from '@angular/core';

import { ProductModel } from '../../../shared/models/shared.models';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: ProductModel;

  constructor(private cartService: CartService) {}

  onAddToCart() {
    this.cartService.addToCard(this.product);
    console.log('Product is purchased');
  }
}
