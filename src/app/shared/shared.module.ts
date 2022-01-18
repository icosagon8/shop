import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { HighlightDirective } from './directives/highlight.directive';
import { OutlineDirective } from './directives/outline.directive';

@NgModule({
  declarations: [HighlightDirective, OutlineDirective],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule, HighlightDirective, OutlineDirective],
})
export class SharedModule {}
