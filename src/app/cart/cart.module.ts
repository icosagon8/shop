import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [CartListComponent],
  exports: [CartListComponent],
  imports: [CommonModule, MatCardModule],
})
export class CartModule {}
