import { Component } from '@angular/core';

import { Category, CoverType, Type } from '../../../shared/models/shared.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  name: string = 'The Lord of the Rings';
  description: string =
    'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.';
  price: number = 20;
  category: Category = Category.Fantasy;
  isAvailable: boolean = true;
  types: Type[] = [Type.Printed, Type.Audio];
  coverTypes: CoverType[] = [CoverType.Hardcover, CoverType.Softcover];

  onAddToCart() {
    console.log('Product is purchased');
  }
}
