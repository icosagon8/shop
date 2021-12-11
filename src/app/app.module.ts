import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FirstModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
