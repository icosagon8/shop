import { NgModule } from '@angular/core';

import { FirstComponent } from './components/first/first.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FirstComponent],
  exports: [FirstComponent],
  imports: [SharedModule],
})
export class FirstModule {}
