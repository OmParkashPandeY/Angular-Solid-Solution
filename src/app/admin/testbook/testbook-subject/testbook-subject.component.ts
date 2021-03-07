// ------------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendConnectionService } from '../../service/backend-connection.service';
// --------------------------------------------------

@Component({
  selector: 'app-testbook-subject',
  templateUrl: './testbook-subject.component.html',
  styleUrls: ['./testbook-subject.component.css']
})
// --------------------------------------------------

export class TestbookSubjectComponent implements OnInit {

// --------------------------------------------------

  constructor(private SubjectService:BackendConnectionService) 
  { 

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
UploadTestBook = new FormGroup({
  subject_name : new FormControl(''),
});

get subject_name(){return this.UploadTestBook.get('subject_name')}
// --------------------------------------------------

ReturnTestBookResult:any;
TBSuccessResult:any;
TBErrorsResult:any;
UploadTestBookFunction()
{


  console.warn(this.UploadTestBook.value);
  this.SubjectService.SendSubjectName(this.UploadTestBook.value).subscribe((Result)=>
  {
     this.ReturnTestBookResult = Result;
     let Success = this.ReturnTestBookResult['Success'];
     let Errors = this.ReturnTestBookResult['Errors'];

     console.warn(Result);
     if(Success)
     {
       this.TBSuccessResult = Success;
       this.TBErrorsResult =false;
       console.warn(Success);
     }
     if(Errors)
     {
        this.TBErrorsResult = Errors;
        this.TBSuccessResult = false;
        console.warn(Errors);
     }

  });
}
// ------------------------------------------------------------------------------------------

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
}
// ------------------------------------------------------------------------------------------
