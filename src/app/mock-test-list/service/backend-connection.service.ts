// ------------------------------------------------------------------------------------------

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// --------------------------------------------------

@Injectable({
  providedIn: 'root'
})

export class BackendConnectionService {

// --------------------------------------------------
// URL Declaration

GETQUESTIONURL = "http://localhost/StrongFacts/public/index.php/StrongFacts/question-control";
TESTBOOKDETAILS= "http://localhost/StrongFacts/Public/index.php/StrongFacts/testbook-control";

// --------------------------------------------------

// --------------------------------------------------
  
  constructor(private HTTP:HttpClient) 
  { 

  }
// --------------------------------------------------
GetMockTestQuestion()
{
    return this.HTTP.get(this.GETQUESTIONURL);
}
// --------------------------------------------------
  
// --------------------------------------------------
TestbookDetails()
{
    return this.HTTP.get(this.TESTBOOKDETAILS);
}
// --------------------------------------------------
  
}
// ------------------------------------------------------------------------------------------

