import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ProductModel } from '../../../shared/models/shared.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product: ProductModel;

  @Output() addProductToCart = new EventEmitter<ProductModel>();

  onAddToCart(): void {
    this.addProductToCart.emit(this.product);
  }
}
