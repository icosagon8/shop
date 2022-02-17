import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { catchError, concatMap, forkJoin, Observable, retry, share, throwError } from 'rxjs';

import { CartProductModel } from 'src/app/shared/models/shared.models';
import { CartProductsAPI } from './../cart.config';

@Injectable({
  providedIn: 'root',
})
export class CartObservableService {
  constructor(private http: HttpClient, @Inject(CartProductsAPI) private cartProductsUrl: string) {}

  getCartProducts(): Observable<CartProductModel[]> {
    return this.http
      .get<CartProductModel[]>(this.cartProductsUrl)
      .pipe(retry(3), share(), catchError(this.handleError));
  }

  getCartProduct(id: number | string): Observable<CartProductModel> {
    const url = `${this.cartProductsUrl}/${id}`;

    return this.http.get<CartProductModel>(url).pipe(retry(3), share(), catchError(this.handleError));
  }

  updateCartProduct(cartProduct: CartProductModel): Observable<CartProductModel[]> {
    const url = `${this.cartProductsUrl}/${cartProduct.id}`;

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.put<CartProductModel>(url, cartProduct, options).pipe(
      concatMap(() => this.getCartProducts()),
      catchError(this.handleError),
    );
  }

  createCartProduct(cartProduct: CartProductModel): Observable<CartProductModel[]> {
    const url = this.cartProductsUrl;

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post<CartProductModel>(url, cartProduct, options).pipe(
      concatMap(() => this.getCartProducts()),
      catchError(this.handleError),
    );
  }

  deleteCartProduct(cartProductId: CartProductModel['id']): Observable<CartProductModel[]> {
    const url = `${this.cartProductsUrl}/${cartProductId}`;

    return this.http.delete(url).pipe(
      concatMap(() => this.getCartProducts()),
      catchError(this.handleError),
    );
  }

  deleteCartProducts(cartProducts: CartProductModel[]): Observable<CartProductModel[]> {
    return forkJoin(
      cartProducts.map((product) => {
        const url = `${this.cartProductsUrl}/${product.id}`;
        return this.http.delete(url);
      }),
    ).pipe(
      concatMap(() => this.getCartProducts()),
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
