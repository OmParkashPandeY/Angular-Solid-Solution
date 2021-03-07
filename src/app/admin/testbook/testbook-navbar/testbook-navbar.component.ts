import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testbook-navbar',
  templateUrl: './testbook-navbar.component.html',
  styleUrls: ['./testbook-navbar.component.css']
})
export class TestbookNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Searchbar = new FormGroup({
    searchitems : new FormControl(''),
  });

  GetSerarchDetails()
  {
    console.warn(this.Searchbar.value);
  }
}
