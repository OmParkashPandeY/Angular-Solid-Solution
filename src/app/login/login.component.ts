// ------------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { ApiMessengerService } from '../api-messenger/api-messenger.service';

// ------------------------------------------------------------------------------------------

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// --------------------------------------------------

export class LoginComponent implements OnInit {


// --------------------------------------------------
constructor
(
    private ActiveLinkParam :ActivatedRoute,
    private ServiceLink : ApiMessengerService,
    private NavigationLink :ActivatedRoute,
    private NavigationNextPage :Router,
    
    )
    {
      
    }
    
    
    // --------------------------------------------------
    
  GetMessage:any;
  OnOfNotification :any = Subscription;
  ngOnInit(): void 
  {

    this.GetMessage = this.ActiveLinkParam.snapshot.queryParamMap.get('message');

    if(this.GetMessage)
    {
        const HideNotification = interval(1000);
        this.OnOfNotification = HideNotification.subscribe((Result)=>
        {
            if(Result >= 3)
            {
              this.GetMessage = false;
            }
        });

    }
    
  }
// --------------------------------------------------
  LoginForm = new FormGroup({

    usersname : new FormControl(''),
    email : new FormControl(''),
    password :new FormControl(''),

  });

  get usersname(){return this.LoginForm.get('usersname')}
  get email(){return this.LoginForm.get('email')}
  get password(){return this.LoginForm.get('password')}

// --------------------------------------------------
ReturnResult :any;
WrongPassword:any;
LoginFailed:any;
GoToLogin()
{   console.warn(this.LoginForm.value);
   this.ServiceLink.LoginFunction(this.LoginForm.value).subscribe((Result)=>
   {

     this.ReturnResult = Result;

     let LoginSuccess = this.ReturnResult['LoginSuccess'];
     let WorngPassword = this.ReturnResult['WrongPassword'];
     let LoginFailed = this.ReturnResult['LoginFail'];
      if(LoginSuccess)
      {
        console.warn(LoginSuccess);
        localStorage.setItem('LoggedInUser',JSON.stringify(this.LoginForm.value));
        this.LoginForm.reset({});
        this.NavigationNextPage.navigateByUrl('/home?message=LoginSuccess');

      }
      if(WorngPassword)
      {
        console.warn(WorngPassword);
        this.WrongPassword = WorngPassword;
      }
      if(LoginFailed)
      {
        console.warn(LoginFailed);
        this.LoginFailed = LoginFailed;
      }

   });
}
// --------------------------------------------------
  
// ------------------------------------------------------------------------------------------

}
