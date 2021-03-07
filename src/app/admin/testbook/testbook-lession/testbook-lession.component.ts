// ------------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendConnectionService } from '../../service/backend-connection.service';

// --------------------------------------------------

@Component({
  selector: 'app-testbook-lession',
  templateUrl: './testbook-lession.component.html',
  styleUrls: ['./testbook-lession.component.css']
})
// --------------------------------------------------

export class TestbookLessionComponent implements OnInit {
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
UploadSubject = new FormGroup({
  subjectname : new FormControl(''),
  subjectlevel: new FormControl(''),
  lessionname : new FormControl(''),
});

get subjectname(){return this.UploadSubject.get('subjectname')}
get subjectlevel(){return this.UploadSubject.get('subjectlevel')}
get lessionname(){return this.UploadSubject.get('lessionname')}

// --------------------------------------------------
ResultChanger :any;
SuccessMessage:any;
ErrorsMessages:any;
UploadSubDetails()
{
  console.warn(this.UploadSubject.value);
  this.SubjectService.SendSubjectDetails(this.UploadSubject.value).subscribe((Result)=>
  {

    this.ResultChanger = Result;

    let Success =this.ResultChanger['Success']; 
    let Failed =this.ResultChanger['Failed']; 
    let Errors =this.ResultChanger['Errors']; 
    
    if(Success)
    {
       this.SuccessMessage = Success;
       console.warn(Success);
    }
    if(Errors)
    {
       this.ErrorsMessages = Errors;
       console.warn(Errors);
    }

  });
}

// ------------------------------------------------------------------------------------------

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
}
// ------------------------------------------------------------------------------------------
