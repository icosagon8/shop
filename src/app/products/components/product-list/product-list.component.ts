import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CartProductModel, ProductModel } from '../../../shared/models/shared.models';
import { ProductsPromiseService } from '../../services/products-promise.service';
import { CartObservableService } from '../../../cart/services/cart-observable.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  products: Promise<ProductModel[]>;
  cartProducts: CartProductModel[];

  constructor(
    private productsPromiseService: ProductsPromiseService,
    private cartObservableService: CartObservableService,
  ) {}

  ngOnInit(): void {
    this.products = this.productsPromiseService.getProducts();
    this.cartObservableService.getCartProducts().subscribe((cartProducts) => {
      this.cartProducts = cartProducts;
    });
  }

  onAddProductToCart(product: ProductModel): void {
    const cartProduct = this.cartProducts.find((productInCart) => productInCart.id === product.id);

    if (cartProduct) {
      const cartProductQuantity = cartProduct.quantity + 1;

      this.cartObservableService
        .updateCartProduct({
          id: product.id,
          name: product.name,
          totalSum: (cartProduct.totalSum / cartProduct.quantity) * cartProductQuantity,
          quantity: cartProductQuantity,
        })
        .subscribe((cartProducts) => {
          this.cartProducts = cartProducts;
        });
    } else {
      this.cartObservableService
        .createCartProduct({
          id: product.id,
          name: product.name,
          totalSum: product.price,
          quantity: 1,
        })
        .subscribe((cartProducts) => {
          this.cartProducts = cartProducts;
        });
    }

    console.log('Product is purchased');
  }
}
