import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { HighlightDirective } from './directives/highlight.directive';
import { OutlineDirective } from './directives/outline.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [HighlightDirective, OutlineDirective, OrderByPipe],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [CommonModule, MaterialModule, FormsModule, HighlightDirective, OutlineDirective, OrderByPipe],
})
export class SharedModule {}
