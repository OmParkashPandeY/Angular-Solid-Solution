// ------------------------------------------------------------------------------------------

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// ------------------------------------------------------------------------------------------

@Injectable({
  providedIn: 'root'
})

// ------------------------------------------------------------------------------------------

export class BackendConnectionService {

// --------------------------------------------------
// Url Creations

SUBJECT_URL ="http://localhost/StrongFacts/public/index.php/StrongFacts/test-series";
SUBJECTNAME_URL ="http://localhost/StrongFacts/public/index.php/StrongFacts/add_subject";
DISPLAYSUBJECTNAME_URL ="http://localhost/StrongFacts/public/index.php/StrongFacts/display_subject_name";
QUESTIONCONTROL_URL ="http://localhost/StrongFacts/public/index.php/StrongFacts/question-control";
ADDTESTBOOK_URL ="http://localhost/StrongFacts/Public/index.php/StrongFacts/testbook-control";

// --------------------------------------------------
  constructor(private HTTP:HttpClient) 
  {

  }
// --------------------------------------------------

SendSubjectDetails(CatchInformation :any)
{
   return this.HTTP.post(this.SUBJECT_URL,CatchInformation);
}
// --------------------------------------------------
GetSubjectDetails()
{
   return this.HTTP.get(this.SUBJECT_URL);
}
// --------------------------------------------------
// --------------------------------------------------
SendSubjectName(CatchInformation:any)
{
   return this.HTTP.post(this.SUBJECTNAME_URL,CatchInformation);
}
// --------------------------------------------------
// --------------------------------------------------
GetSubjectName()
{
   return this.HTTP.get(this.DISPLAYSUBJECTNAME_URL);
}
// --------------------------------------------------
// --------------------------------------------------
SetQuestionDetails(CatchInformation:any)
{
   return this.HTTP.post(this.QUESTIONCONTROL_URL,CatchInformation);
}
// --------------------------------------------------
// --------------------------------------------------
AddNewTestbook(CatchInformation:any)
{
   return this.HTTP.post(this.ADDTESTBOOK_URL,CatchInformation);
}
// --------------------------------------------------
// --------------------------------------------------
DisplayTestbook()
{
   return this.HTTP.get(this.ADDTESTBOOK_URL);
}
// --------------------------------------------------

}

// ------------------------------------------------------------------------------------------
