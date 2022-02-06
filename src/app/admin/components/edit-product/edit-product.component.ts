import { Component } from '@angular/core';
import { UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { CanComponentDeactivate } from '../../../core/interfaces/can-component-deactivate.interface';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
})
export class EditProductComponent implements CanComponentDeactivate {
  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm('Are you sure?');
  }
}
