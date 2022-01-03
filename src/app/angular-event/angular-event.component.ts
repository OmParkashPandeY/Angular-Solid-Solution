import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-angular-event',
  templateUrl: './angular-event.component.html',
  styleUrls: ['./angular-event.component.css']
})
export class AngularEventComponent implements OnInit
{

  public pageTitle: string = "";
  public isActiveSidebar = true;
  public isActiveCondition = true;
  public curruntDay: string = 'Sunday';


  constructor(private _elRef: ElementRef,) { }

  ngOnInit(): void
  {
  }

  public inputEventFunction(eventValue: any)
  {
    window.alert(eventValue);
  }

  public showHideSidebar()
  {
    var element = $(this._elRef.nativeElement).find('#sidebarBackground');
    if (this.isActiveSidebar)
    {
      element.css('margin-left', '-60px');
      this.isActiveSidebar = false;
    } else
    {
      element.css('margin-left', '0px');
      this.isActiveSidebar = true;
    }
  }

  public getAndSetCurruntDay(day: string)
  {
    this.curruntDay = day;
  }
}
