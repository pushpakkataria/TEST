import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor( private ram:ElementRef) {
    ram.nativeElement.style.color="blue"
   }

}
