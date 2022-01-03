import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.css']
})
export class MyNavbarComponent implements OnInit
{

  constructor() { }
  @Output() showHideSideBar = new EventEmitter<any>();


  ngOnInit(): void
  {
  }

}
