import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [ProductComponent],
  exports: [ProductComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class ProductsModule {}
