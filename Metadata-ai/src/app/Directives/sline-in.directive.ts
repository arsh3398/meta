import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSlineIn]',
})
export class SlineInDirective {
  private delay: string;
  @HostListener('window:scroll', [])
  scroll() {
    const rect = this.element.nativeElement.getBoundingClientRect();//this is used to get the rectangle around the object
    let scroll = this.mapRange(0, window.innerHeight, 0.2, 0.5, rect.top + (rect.height / 2)); //this code helps to get the relative position of rectangle to viewport
    scroll = scroll < 0 ? 0 : scroll > 1 ? 1 : scroll //this is to check the scroll value is between 0 and 1
    this.delay = `-${scroll.toFixed(2)}s`;//this is to assign scroll value to delay
  }
  @HostBinding('style.animationDelay') get animationDelay(): string {
    return this.delay; //this hostbinder is used to bind animation delay property of CSS to this directive so that this animation will start only when object is in viewport.
  }
  mapRange(a1: number, a2: number, b1: number, b2: number, value: number): number {
    return b1 + ((value - a1) * (b2 - b1)) / (a2 - a1);
  }
  constructor(private element: ElementRef<HTMLElement>) { }

}
