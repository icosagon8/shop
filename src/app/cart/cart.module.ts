import { NgModule } from '@angular/core';

import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartItemComponent, CartListComponent],
  exports: [CartListComponent],
  imports: [SharedModule],
})
export class CartModule {}
