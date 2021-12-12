import { NgModule } from '@angular/core';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartListComponent],
  exports: [CartListComponent],
  imports: [SharedModule],
})
export class CartModule {}
