import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetScale]'
})
export class SetScaleDirective implements OnInit {
  scaleValue: number = 0;

  constructor(private elementRef: ElementRef, private rederer: Renderer2) { }



  ngOnInit(): void {
    // console.log(this.elementRef.nativeElement.offsetWidth);
    // if (window.innerWidth >= 1400) {
    //   console.log(window.innerWidth, "1400");
    // } else if (window.innerWidth >= 1200) {
    //   console.log(window.innerWidth, "1200");
    // } else if (window.innerWidth >= 992) {
    //   console.log(window.innerWidth, "992");
    // } else if (window.innerWidth >= 762) {
    //   console.log(window.innerWidth, "762");
    // } else if (window.innerWidth >= 576) {
    //   console.log(window.innerWidth, "576");
    // } else {
    //   console.log(window.innerWidth, "<576");
    // }
  }

  @HostListener('window:resize', ['$event']) 
  onResize(event: Event) {
    console.log(event, "resized")
    // console.log(this.elementRef.nativeElement.offsetWidth);
    if (window.innerWidth >= 1400) {
      this.setScale(0.8);
      console.log(window.innerWidth, "1400");
    } else if (window.innerWidth >= 1200) {
      this.setScale(0.6);
      console.log(window.innerWidth, "1200");
    } else if (window.innerWidth >= 992) {
      this.setScale(0.6);
      console.log(window.innerWidth, "992");
    } else if (window.innerWidth >= 762) {
      this.setScale(0.4);
      console.log(window.innerWidth, "762");
    } else if (window.innerWidth >= 576) {
      this.setScale(0.3);
      console.log(window.innerWidth, "576");
    } else {
      this.setScale(0.3);
      console.log(window.innerWidth, "<576");
    }
}

private setScale(scale: number) {
  console.log(scale);
  console.log(this.elementRef);
  console.log(this.rederer);
  this.rederer.setStyle(this.elementRef.nativeElement, 'transform', `scale(${scale})`);
}


}
