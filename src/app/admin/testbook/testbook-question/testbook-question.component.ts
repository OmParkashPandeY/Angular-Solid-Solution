// ------------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendConnectionService } from '../../service/backend-connection.service';

// --------------------------------------------------

@Component({
  selector: 'app-testbook-question',
  templateUrl: './testbook-question.component.html',
  styleUrls: ['./testbook-question.component.css']
})
// --------------------------------------------------

export class TestbookQuestionComponent implements OnInit {

// --------------------------------------------------

  SubjectDetails:any;
  SubjectNameDetails:any;

  constructor(private SubjectService:BackendConnectionService)
  { 
          this.SubjectService.GetSubjectDetails().subscribe((Result)=>
          {
             this.SubjectDetails = Result;
             console.warn(Result);
          });

          this.SubjectService.GetSubjectName().subscribe((Result)=>
          {
             let CatchResult:any = Result;
             this.SubjectNameDetails = CatchResult['FindResult'];
             console.warn(Result);
          });
  }

// --------------------------------------------------

  ngOnInit(): void {
  }
// --------------------------------------------------
ActiveClass:any=0;

SidebarShowHide()
{
 
  if(this.ActiveClass==0)
  {
    const myComponent:any = document.getElementById('sidebar');
    myComponent.style.marginLeft ='0%';

    const Arrow:any = document.getElementById('arrow');
    Arrow.style.transform ='rotate(180deg)';

    this.ActiveClass ++;
  }
  else
  {
    const myComponent:any = document.getElementById('sidebar');
    myComponent.style.marginLeft ='-20%';

    const Arrow:any = document.getElementById('arrow');
    Arrow.style.transform ='rotate(0deg)';

    this.ActiveClass=0;
  }
    
   
}
// --------------------------------------------------
// ------------------------------------------------------------------------------------------

QuestionUploadForm = new FormGroup({
   testbookname : new FormControl(''),
   testsubject : new FormControl(''),
   testlevel : new FormControl(''),
   lession : new FormControl(''),
   questiondetails : new FormControl(''),
   option1 : new FormControl(''),
   option2 : new FormControl(''),
   option3 : new FormControl(''),
   option4 : new FormControl(''),
   answer : new FormControl(''),
});

get testbookname(){return this.QuestionUploadForm.get('testbookname')}
get testsubject(){return this.QuestionUploadForm.get('testsubject')}
get testlevel(){return this.QuestionUploadForm.get('testbookname')}
get lession(){return this.QuestionUploadForm.get('lession')}
get questiondetails(){return this.QuestionUploadForm.get('questiondetails')}
get option1(){return this.QuestionUploadForm.get('option1')}
get option2(){return this.QuestionUploadForm.get('option2')}
get option3(){return this.QuestionUploadForm.get('option3')}
get option4(){return this.QuestionUploadForm.get('option4')}
get answer(){return this.QuestionUploadForm.get('answer')}

// --------------------------------------------------
GetUploadQuestion()
{
  this.SubjectService.SetQuestionDetails(this.QuestionUploadForm.value).subscribe((Result)=>
  {
     console.warn(Result);
  });
}
// ------------------------------------------------------------------------------------------

}

// ------------------------------------------------------------------------------------------
