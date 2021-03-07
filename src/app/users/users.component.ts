import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
// import { Aos } from 'aos'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
