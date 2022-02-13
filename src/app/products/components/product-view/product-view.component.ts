import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductModel } from '../../../shared/models/shared.models';
import { CartService } from '../../../core/services/cart.service';

@Component({
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductViewComponent implements OnInit {
  product: ProductModel;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    this.route.data.subscribe((response: any) => {
      this.product = response.product;
    });
  }

  onAddToCart(): void {
    this.cartService.addProduct(this.product);
  }
}
