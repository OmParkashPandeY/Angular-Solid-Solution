// ------------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';

// --------------------------------------------------

@Component({
  selector: 'app-testbook-question',
  templateUrl: './testbook-question.component.html',
  styleUrls: ['./testbook-question.component.css']
})
// --------------------------------------------------

export class TestbookQuestionComponent implements OnInit {

// --------------------------------------------------

  constructor() { }

// --------------------------------------------------

  ngOnInit(): void {
  }
// --------------------------------------------------
ActiveClass:any = true;

SidebarShowHide()
{
 
    const myComponent:any = document.getElementById('sidebar');

    myComponent.style.marginLeft ='0%';
   
}

}

// ------------------------------------------------------------------------------------------
