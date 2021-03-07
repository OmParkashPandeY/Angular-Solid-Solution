// ------------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendConnectionService } from '../../service/backend-connection.service';
// --------------------------------------------------

@Component({
  selector: 'app-new-testbook',
  templateUrl: './new-testbook.component.html',
  styleUrls: ['./new-testbook.component.css']
})
// --------------------------------------------------

export class NewTestbookComponent implements OnInit {

  // --------------------------------------------------
  
  constructor(private HTTPservice:BackendConnectionService) { }

  // --------------------------------------------------
  
  ngOnInit(): void {
  }

  // --------------------------------------------------
 
  AddNewTestBook = new FormGroup({
    subject : new FormControl(''),
    subjectlevel :new FormControl(''),
    testbookname :new FormControl(''),
    totalquestion :new FormControl(''),
    testbookmarks :new FormControl(''),
    testtime :new FormControl(''),

  });

  get subject(){return this.AddNewTestBook.get('subject')}
  get subjectlevel(){return this.AddNewTestBook.get('subjectlevel')}
  get testbookname(){return this.AddNewTestBook.get('testbookname')}
  get totalquestion(){return this.AddNewTestBook.get('totalquestion')}
  get testbookmarks(){return this.AddNewTestBook.get('testbookmarks')}
  get testtime(){return this.AddNewTestBook.get('testtime')}

  // --------------------------------------------------
  GetANTBDetails()
  {
    console.warn(this.AddNewTestBook.value);
    this.HTTPservice.AddNewTestbook(this.AddNewTestBook.value).subscribe((Result)=>
    {
         console.warn(Result);
    });
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
}
