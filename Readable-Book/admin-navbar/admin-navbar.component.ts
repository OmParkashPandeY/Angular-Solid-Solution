// ------------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// --------------------------------------------------

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})

// --------------------------------------------------

export class AdminNavbarComponent implements OnInit {

  constructor() { }

  // --------------------------------------------------
  
  ngOnInit(): void {
  }

  // --------------------------------------------------
  ActivateWorker :any = false;
  Activater :any = 0;

  ShowHideSideBar()
  {
      if(this.Activater == 0)
      {
           this.ActivateWorker = true;
           return this.Activater =1;
      }
     else
      {
           this.ActivateWorker = false;
           return this.Activater = 0;
      }
  }
 // --------------------------------------------------
 SearchField  = new FormGroup({
      FieldValue : new FormControl(''),
  }) ;

get FieldValue(){return this.SearchField.value.get('FieldValue')}

// --------------------------------------------------
FetchValue: any;
FetchResult:any;
SearchAction()
{
  this.FetchResult = (this.SearchField.value);
  this.FetchValue = this.FetchResult['FieldValue'];
}
  // ------------------------------------------------------------------------------------------
  
}
