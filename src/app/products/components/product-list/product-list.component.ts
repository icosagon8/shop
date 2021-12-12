import { Component } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../../shared/models/shared.models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
  }
}
