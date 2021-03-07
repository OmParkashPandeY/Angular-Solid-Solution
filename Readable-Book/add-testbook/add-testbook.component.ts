// // ------------------------------------------------------------------------------------------

// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { BackendConnectionService } from '../service/backend-connection.service';

// // ------------------------------------------------------------------------------------------

// @Component({
//   selector: 'app-add-testbook',
//   templateUrl: './add-testbook.component.html',
//   styleUrls: ['./add-testbook.component.css']
// })

// // ------------------------------------------------------------------------------------------
// export class AddTestbookComponent implements OnInit {
  
//   SubjectDetails:any;
//   SubjectNameDetails:any;

//   constructor(private SubjectService:BackendConnectionService)
//   { 
//           this.SubjectService.GetSubjectDetails().subscribe((Result)=>
//           {
//              this.SubjectDetails = Result;
//              console.warn(Result);
//           });

//           this.SubjectService.GetSubjectName().subscribe((Result)=>
//           {
//              let CatchResult:any = Result;
//              this.SubjectNameDetails = CatchResult['FindResult'];
//              console.warn(Result);
//           });
//   }

//   // --------------------------------------------------
  
//   ngOnInit(): void {
//   }
// // --------------------------------------------------

// GotoNewTest()

// {
//   document.getElementById('addnewtest')?.scrollIntoView({behavior:'smooth'});
// }
// GotoTestDetails()

// {
//   document.getElementById('testdetails')?.scrollIntoView({behavior:'smooth'});
// }
// GotoModifyTest()

// {
//   document.getElementById('modifytest')?.scrollIntoView({behavior:'smooth'});
// }
// GotoRemoveTest()

// {
//   document.getElementById('removetest')?.scrollIntoView({behavior:'smooth'});
// }
// GotoAttemptedTest()

// {
//   document.getElementById('attemptedtest')?.scrollIntoView({behavior:'smooth'});
// }
// // --------------------------------------------------
// // Test Category Link
// GotoTestCategory()

// {
//   document.getElementById('testcategory')?.scrollIntoView({behavior:'smooth'});
// }
// GotoAddCategory()

// {
//   document.getElementById('addcategory')?.scrollIntoView({behavior:'smooth'});
// }
// GotoEditCategory()

// {
//   document.getElementById('editcategory')?.scrollIntoView({behavior:'smooth'});
// }
// GotoRemoveCategory()

// {
//   document.getElementById('removecategory')?.scrollIntoView({behavior:'smooth'});
// }
// // ------------------------------------------------------------------------------------------

// AddNewSubject()

// {
//   document.getElementById('addnewsubject')?.scrollIntoView({behavior:'smooth'});
// }
// // ------------------------------------------------------------------------------------------
// UploadTestBook = new FormGroup({
//   subject_name : new FormControl(''),
// });

// get subject_name(){return this.UploadTestBook.get('subject_name')}
// // --------------------------------------------------

// ReturnTestBookResult:any;
// TBSuccessResult:any;
// TBErrorsResult:any;
// UploadTestBookFunction()
// {


//   console.warn(this.UploadTestBook.value);
//   this.SubjectService.SendSubjectName(this.UploadTestBook.value).subscribe((Result)=>
//   {
//      this.ReturnTestBookResult = Result;
//      let Success = this.ReturnTestBookResult['Success'];
//      let Errors = this.ReturnTestBookResult['Errors'];

//      console.warn(Result);
//      if(Success)
//      {
//        this.TBSuccessResult = Success;
//        this.TBErrorsResult =false;
//        console.warn(Success);
//      }
//      if(Errors)
//      {
//         this.TBErrorsResult = Errors;
//         this.TBSuccessResult = false;
//         console.warn(Errors);
//      }

//   });
// }
// // ------------------------------------------------------------------------------------------
// UploadSubject = new FormGroup({
//   subjectname : new FormControl(''),
//   subjectlevel: new FormControl(''),
//   lessionname : new FormControl(''),
// });

// get subjectname(){return this.UploadSubject.get('subjectname')}
// get subjectlevel(){return this.UploadSubject.get('subjectlevel')}
// get lessionname(){return this.UploadSubject.get('lessionname')}

// // --------------------------------------------------
// ResultChanger :any;
// SuccessMessage:any;
// ErrorsMessages:any;
// UploadSubDetails()
// {
//   console.warn(this.UploadSubject.value);
//   this.SubjectService.SendSubjectDetails(this.UploadSubject.value).subscribe((Result)=>
//   {

//     this.ResultChanger = Result;

//     let Success =this.ResultChanger['Success']; 
//     let Failed =this.ResultChanger['Failed']; 
//     let Errors =this.ResultChanger['Errors']; 
    
//     if(Success)
//     {
//        this.SuccessMessage = Success;
//        console.warn(Success);
//     }
//     if(Errors)
//     {
//        this.ErrorsMessages = Errors;
//        console.warn(Errors);
//     }

//   });
// }

// // ------------------------------------------------------------------------------------------
// GetSelectSubName(CatchValue:any)

// {
//   console.warn(CatchValue)
// }
// // ------------------------------------------------------------------------------------------
// UploadQuestion = new FormGroup({
//    testbookname : new FormControl(''),
//    testsubject : new FormControl(''),
//    testlevel : new FormControl(''),
//    lession : new FormControl(''),
//    questiondetails : new FormControl(''),
//    option1 : new FormControl(''),
//    option2 : new FormControl(''),
//    option3 : new FormControl(''),
//    option4 : new FormControl(''),
//    answer : new FormControl(''),
// });

// get testbookname(){return this.UploadQuestion.get('testbookname')}
// get testsubject(){return this.UploadQuestion.get('testsubject')}
// get testlevel(){return this.UploadQuestion.get('testbookname')}
// get lession(){return this.UploadQuestion.get('lession')}
// get questiondetails(){return this.UploadQuestion.get('questiondetails')}
// get option1(){return this.UploadQuestion.get('option1')}
// get option2(){return this.UploadQuestion.get('option2')}
// get option3(){return this.UploadQuestion.get('option3')}
// get option4(){return this.UploadQuestion.get('option4')}
// get answer(){return this.UploadQuestion.get('answer')}

// // --------------------------------------------------
// GetUploadQuestion()
// {
//   this.SubjectService.SetQuestionDetails(this.UploadQuestion.value).subscribe((Result)=>
//   {
//      console.warn(Result);
//   });
// }
// // ------------------------------------------------------------------------------------------

// }
