import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CartService } from '../../../core/services/cart.service';
import { ProductModel } from '../../../shared/models/shared.models';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  products: Promise<ProductModel[]>;

  constructor(private productsService: ProductsService, private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onAddProductToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
    console.log('Product is purchased');
  }
}
