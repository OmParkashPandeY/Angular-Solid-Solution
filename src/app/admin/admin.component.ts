// ------------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

// --------------------------------------------------

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
// --------------------------------------------------

export class AdminComponent implements OnInit {

  constructor() { }

  // --------------------------------------------------
  
  ngOnInit(): void {

    Aos.init();
  }

  
  // ------------------------------------------------------------------------------------------
  
}
