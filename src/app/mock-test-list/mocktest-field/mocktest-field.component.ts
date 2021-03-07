// ------------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BackendConnectionService } from '../service/backend-connection.service';
// ------------------------------------------------------------------------------------------

@Component({
  selector: 'app-mocktest-field',
  templateUrl: './mocktest-field.component.html',
  styleUrls: ['./mocktest-field.component.css']
})
// --------------------------------------------------

export class MocktestFieldComponent implements OnInit {

// --------------------------------------------------
ArrayConverter:any;
QuestionContainers:any;
// --------------------------------------------------
  
  constructor(private HTTP_SERVICE : BackendConnectionService) 
  { 
      this.HTTP_SERVICE.GetMockTestQuestion().subscribe((Result)=>
      {
        this.ArrayConverter = Result;

        this.QuestionContainers = this.ArrayConverter['QuestionDetails'];
        console.warn(Result);
       
      });
  }
// --------------------------------------------------

  ngOnInit(): void {
  }

// --------------------------------------------------
 

// --------------------------------------------------
SubmitTestBook(GetAttemptedTest:any)
{
  console.warn(GetAttemptedTest);
}
// --------------------------------------------------

}
// ------------------------------------------------------------------------------------------
