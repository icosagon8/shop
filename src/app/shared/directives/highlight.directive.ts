import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('class.highlight')
  isHighlight: boolean = false;

  @HostListener('mouseenter')
  enter(): void {
    this.isHighlight = true;
  }

  @HostListener('mouseleave')
  leave(): void {
    this.isHighlight = false;
  }
}
