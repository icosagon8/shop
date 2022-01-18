import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOutline]',
})
export class OutlineDirective {
  @Input('appOutline') color!: string;

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mousedown')
  down(): void {
    this.addOutline(this.color || '#e67a00');
  }

  @HostListener('mouseup')
  up(): void {
    this.removeOutline();
  }

  private addOutline(color: string | null): void {
    this.render.setStyle(this.el.nativeElement, 'outline', `2px solid ${color}`);
  }

  private removeOutline(): void {
    this.render.setStyle(this.el.nativeElement, 'outline', null);
  }
}
