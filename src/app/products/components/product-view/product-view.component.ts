import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductModel } from '../../../shared/models/shared.models';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductViewComponent implements OnInit {
  product: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('productID')!;
    this.product = this.productService.getProduct(id);
  }

  onAddToCart(): void {
    this.cartService.addProduct(this.product);
  }
}
