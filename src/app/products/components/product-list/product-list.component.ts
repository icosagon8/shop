import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CartService } from '../../../core/services/cart.service';
import { ProductModel } from '../../../shared/models/shared.models';
import { ProductsPromiseService } from '../../services/products-promise.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  products: Promise<ProductModel[]>;

  constructor(private cartService: CartService, private productsPromiseService: ProductsPromiseService) {}

  ngOnInit(): void {
    this.products = this.productsPromiseService.getProducts();
  }

  onAddProductToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
    console.log('Product is purchased');
  }
}
