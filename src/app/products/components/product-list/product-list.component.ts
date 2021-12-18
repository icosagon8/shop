import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../../shared/models/shared.models';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onAddProductToCart(product: ProductModel): void {
    this.cartService.addToCard(product);
    console.log('Product is purchased');
  }
}
