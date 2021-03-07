// ------------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendConnectionService } from '../service/backend-connection.service';

// ------------------------------------------------------------------------------------------

@Component({
  selector: 'app-php-mocktest',
  templateUrl: './php-mocktest.component.html',
  styleUrls: ['./php-mocktest.component.css']
})

// ------------------------------------------------------------------------------------------

export class PhpMocktestComponent implements OnInit {

  constructor(private RoutingParameter : ActivatedRoute ,private HTTPservice:BackendConnectionService) { }
// --------------------------------------------------
 TestbookDetailsbox:any;
  ngOnInit(): 
  void {
    console.warn(this.RoutingParameter.snapshot.params.subject);

    this.HTTPservice.TestbookDetails().subscribe((Result)=>
    {
        console.warn(Result);
        this.TestbookDetailsbox = Result;
    });
  }
// --------------------------------------------------
TestbookStatusActive:any = false;
Active :any=0;
Activebutton:any;
TBSActive()
{
 
  if( this.Active == 0)
  {
    this.TestbookStatusActive=true;
    this.Activebutton = "activebutton";
    return this.Active = 1;
  }
  else
  {
    this.TestbookStatusActive=false;
    this.Activebutton = "";
    return this.Active = 0;
  }
  
}
// ------------------------------------------------------------------------------------------
  
}
