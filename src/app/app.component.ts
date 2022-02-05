import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { CartService } from './core/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  constructor(public cartService: CartService) {}

  ngAfterViewInit() {
    this.appTitle.nativeElement.textContent = 'Shop';
  }
}
