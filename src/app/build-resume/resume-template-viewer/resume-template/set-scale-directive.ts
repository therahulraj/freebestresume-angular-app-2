import { AfterContentInit, Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSetScale]'
})
export class SetScaleDirective {
  scaleValue: number = 0;
  

  constructor(private elementRef: ElementRef, private rederer: Renderer2) { }


  @Input() set templateContainerWidth(width: number | undefined) {
    if (width != null) {
      console.log(width, " containerWidth", window.innerWidth, " windowInnerWidth")
      if (window.innerWidth > 768) {
          this.setScale(width / 793);
      } else {
        this.setScale(window.innerWidth / 793);
      }
    }
  }

  private setScale(scale: number) {
    this.rederer.setStyle(this.elementRef.nativeElement, 'transform', `scale(${scale})`);
  }


}
