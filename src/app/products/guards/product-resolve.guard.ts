import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of, EMPTY, from } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';

import { ProductModel } from '../../shared/models/shared.models';
import { ProductsPromiseService } from '../services/products-promise.service';

@Injectable({
  providedIn: 'any',
})
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(private productsPromiseService: ProductsPromiseService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel> {
    const id = +route.paramMap.get('productID')!;

    return from(this.productsPromiseService.getProduct(id)).pipe(
      switchMap((product: ProductModel) => {
        if (product) {
          return of(product);
        } else {
          this.router.navigate(['/']);
          return EMPTY;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/']);
        return EMPTY;
      }),
    );
  }
}
