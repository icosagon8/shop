import { Component, OnInit } from '@angular/core';

import { CartData, CartProductModel } from '../../../shared/models/shared.models';
import { CartService } from '../../../core/services/cart.service';
import { CartObservableService } from '../../services/cart-observable.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  products: CartProductModel[] = [];
  cartData!: CartData;
  isAsc = true;
  selectedValues = ['name'];

  sortOptions: { displayName: string; key: string }[] = [
    { displayName: 'Name', key: 'name' },
    { displayName: 'Price', key: 'totalSum' },
    { displayName: 'Quantity', key: 'quantity' },
  ];

  constructor(private cartService: CartService, private cartObservableService: CartObservableService) {}

  ngOnInit(): void {
    this.cartObservableService.getCartProducts().subscribe((cartProducts) => {
      this.products = cartProducts;
      this.updateCartData();
    });
    this.cartData = this.cartService.getCartData();
  }

  trackByItems(index: number, item: CartProductModel): number {
    return item.id;
  }

  onIncreaseQuantity(id: CartProductModel['id']): void {
    const cartProduct = this.products.find((product) => product.id === id)!;
    const cartProductQuantity = cartProduct.quantity + 1;

    this.cartObservableService
      .updateCartProduct({
        id: cartProduct.id,
        name: cartProduct.name,
        totalSum: (cartProduct.totalSum / cartProduct.quantity) * cartProductQuantity,
        quantity: cartProductQuantity,
      })
      .subscribe((productInCart) => {
        this.products = productInCart;
        this.updateCartData();
      });
  }

  onDecreaseQuantity(id: CartProductModel['id']): void {
    const cartProduct = this.products.find((product) => product.id === id)!;
    const cartProductQuantity = cartProduct.quantity - 1;

    this.cartObservableService
      .updateCartProduct({
        id: cartProduct.id,
        name: cartProduct.name,
        totalSum: (cartProduct.totalSum / cartProduct.quantity) * cartProductQuantity,
        quantity: cartProductQuantity,
      })
      .subscribe((productInCart) => {
        this.products = productInCart;
        this.updateCartData();
      });
  }

  onRemoveProduct(id: CartProductModel['id']): void {
    this.cartObservableService.deleteCartProduct(id).subscribe((cartProduct) => {
      this.products = cartProduct;
      this.updateCartData();
    });
  }

  onRemoveAllProducts(): void {
    this.cartObservableService.deleteCartProducts(this.products).subscribe((cartProduct) => {
      this.products = cartProduct;
      this.updateCartData();
    });
  }

  private updateCartData(): void {
    this.cartData.totalQuantity = this.products.reduce((totalQuantity, product) => totalQuantity + product.quantity, 0);
    this.cartData.totalSum = this.products.reduce((totalSum, product) => totalSum + product.totalSum, 0);
  }

  get totalQuantity(): number {
    return this.cartData.totalQuantity;
  }

  get totalSum(): number {
    return this.cartData.totalSum;
  }
}
