import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { CanComponentDeactivate } from '../interfaces/can-component-deactivate.interface';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: CanComponentDeactivate,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate?.() ?? false;
  }
}
