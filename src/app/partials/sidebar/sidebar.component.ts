import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit
{

  public isShowDashboardMenu: boolean = false;
  public isShowWhatsappMenu: boolean = false;
  constructor(
    private _elRef: ElementRef,
  ) { }

  ngOnInit(): void
  {
  }

  public showHideDashbardSidebar()
  {
    var element = $(this._elRef.nativeElement).find('#dashboardMenu');
    if (!this.isShowDashboardMenu)
    {
      element.css('margin-left', '0px');
      this.isShowDashboardMenu = true;
    } else
    {
      element.css('margin-left', '-340px');
      this.isShowDashboardMenu = false;
    }
  }

  public showHideWhatsappMenuSidebar()
  {
    var element = $(this._elRef.nativeElement).find('#whatsappMenu');
    if (!this.isShowWhatsappMenu)
    {
      element.css('margin-left', '0px');
      this.isShowWhatsappMenu = true;
    } else
    {
      element.css('margin-left', '-340px');
      this.isShowWhatsappMenu = false;
    }
  }
}
