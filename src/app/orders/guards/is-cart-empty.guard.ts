import { Injectable } from '@angular/core';
import { CanLoad, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { CartService } from '../../core/services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class IsCartEmptyGuard implements CanLoad {
  constructor(private cartService: CartService) {}

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.cartService.isEmptyCart();
  }
}
