import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiMessengerService } from '../api-messenger/api-messenger.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  
  ActiveFirstSlide  = true;
  ActiveSecondSlide = false;

  constructor(
    private SendInformation : ApiMessengerService,
    private RedirectLink :Router,
    ) 
  {

   
  
  }

  ngOnInit(): void {}
// ------------------------------------------------------------------------------------------


GotoSecondSlide()
{
  this.ActiveSecondSlide=true;
  this.ActiveFirstSlide  = false;
  document.getElementById("secondslide")?.scrollIntoView({behavior:'smooth'});
}
GotoFirstSlide()
{
  this.ActiveFirstSlide  = true;
  this.ActiveSecondSlide = false;
  document.getElementById("firstslide")?.scrollIntoView({behavior:'smooth'});
}


// ------------------------------------------------------------------------------------------

SignupUsers = new FormGroup({
  firstname : new FormControl(''),
  lastname : new FormControl(''),
  usersname :new FormControl(''),
  email :new FormControl(''),
  password:new FormControl('')

});

get firstname(){return this.SignupUsers.get('firstname')}
get lastname(){return this.SignupUsers.get('lastname')}
get usersname(){return this.SignupUsers.get('usersname')}
get email(){return this.SignupUsers.get('email')}
get password(){return this.SignupUsers.get('password')}

// ------------------------------------------------------------------------------------------
ReturnResult:any;
SuccessMessage:any;
Errors :any;
GetUsersValue()
{
   let UsersDetails = this.SignupUsers.value;

   this.SendInformation.InsertSignupValue(UsersDetails).subscribe((Result)=>
   {
       console.warn(Result);
       this.ReturnResult = Result;

       let CatchSuccess = this.ReturnResult['SignupSuccess'];
       let CatchErrors = this.ReturnResult['SignupErrors'];

       if(CatchSuccess)
       {
       this.SuccessMessage = CatchSuccess;
       console.warn(this.SuccessMessage);
       this.SignupUsers.reset({});
       this.RedirectLink.navigateByUrl('/login?message=Success');
       
       }
       if(CatchErrors)
       {
        this.Errors = CatchErrors[0];
        console.warn(this.Errors);
       }
      
       
   });
}
// ------------------------------------------------------------------------------------------

}
