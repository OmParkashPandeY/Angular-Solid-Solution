import { Component, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-right-click-menu',
  templateUrl: './right-click-menu.component.html',
  styleUrls: ['./right-click-menu.component.css']
})
export class RightClickMenuComponent implements OnInit
{

  constructor(private _elemRef: ElementRef) { }

  ngOnInit(): void
  {
  }


  public rightClickMenu(e: any)
  {
    var top = e.pageY - 100;
    var left = e.pageX - 300;
    $(this._elemRef.nativeElement).find("#context-menu").css({
      display: "block",
      top: top,
      left: left
    }).addClass("show");
    return false;
  }


  public hideRightMenu()
  {
    $(this._elemRef.nativeElement).find("#context-menu").removeClass("show").hide();
  }

}

