import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Category, CoverType, Type } from '../../../shared/models/shared.models';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent {
  name: string = 'The Lord of the Rings';
  description: string =
    'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.';
  price: number = 20;
  category: Category = Category.Fantasy;
  isAvailable: boolean = true;
  types: Type[] = [Type.Printed, Type.Audio];
  coverTypes: CoverType[] = [CoverType.Hardcover, CoverType.Softcover];
}
