import { AfterContentInit, AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSetScale]'
})
export class SetScaleDirective implements AfterViewInit {
  scaleValue: number = 0;
  

  constructor(private elementRef: ElementRef, private rederer: Renderer2) { }
  
  ngAfterViewInit(): void {
    console.log(this.elementRef, "widthhhhh1");
  }


  @Input() set templateContainerWidth(width: number | undefined) {
    console.log(width, "widthhhhh");
    // if (width != null) {
    //   console.log(width, " containerWidth", window.innerWidth, " windowInnerWidth")
    //   if (window.innerWidth > 768) {
    //       this.setScale(width / 793);
    //   } else {
    //     this.setScale(window.innerWidth / 793);
    //   }
    // }
  }

  private setScale(scale: number) {
    this.rederer.setStyle(this.elementRef.nativeElement, 'transform', `scale(${scale})`);
  }


}
