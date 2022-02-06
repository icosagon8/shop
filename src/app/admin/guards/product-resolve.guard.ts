import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of, EMPTY } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';

import { ProductsService } from '../../products/services/products.service';
import { ProductModel } from '../../shared/models/shared.models';

@Injectable({
  providedIn: 'any',
})
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(private productsService: ProductsService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel> {
    const id = +route.paramMap.get('productID')!;

    return of(this.productsService.getProduct(id)).pipe(
      switchMap((product: ProductModel) => {
        if (product) {
          return of(product);
        } else {
          this.router.navigate(['/admin/products']);
          return EMPTY;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/admin/products']);
        return EMPTY;
      }),
    );
  }
}
