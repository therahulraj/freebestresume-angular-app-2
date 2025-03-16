import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";
import { withDebugTracing } from "@angular/router";


@Directive({
  selector: '[appFixBottom]'
})

export class FixBottomDirective implements OnInit {

    constructor(private elementRef: ElementRef, private rederer: Renderer2) {
        
    }
    ngOnInit(): void {
        // if (window.visualViewport?.height) {
        //     this.rederer.setStyle(this.elementRef.nativeElement, 'top', 
        //         window.visualViewport.height - 50 + 'px');
        //     // console.log(this.elementRef.nativeElement);
        // }
    }

    @HostListener('window:resize', ['$event']) 
    onResize(event: Event) {
        // console.log(window.visualViewport?.height, "visualViewport");
        // console.log(this.elementRef.nativeElement.offsetHeight);
        if (window.visualViewport?.height) {
            this.rederer.setStyle(this.elementRef.nativeElement, 'top', 
                window.visualViewport.height - 50 + 'px');
            console.log(window.visualViewport.height);
        }
    }



}