import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatSelectModule],
  exports: [MatCardModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatSelectModule],
})
export class MaterialModule {}
