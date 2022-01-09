import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [HighlightDirective],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule, HighlightDirective],
})
export class SharedModule {}
