import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSweetTitle]'
})
export class SweetTitleDirective
{

  constructor(private _elmRef: ElementRef)
  {
    // _elmRef.nativeElement.innerText = "pink";
    var obj = _elmRef.nativeElement.style;


    obj.color = "#590295";
    obj.fontWeight = "bold";
    obj.fontSize = "25px";
  }


}
