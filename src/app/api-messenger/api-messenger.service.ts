import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMessengerService 
{

  URL ="http://localhost/StrongFacts/public/index.php/StrongFacts/transaction";

  LOGINURL ="http://localhost/StrongFacts/public/index.php/StrongFacts/Login";
  
  constructor(private HTTP:HttpClient)
  {

  }
// --------------------------------------------------

InsertSignupValue(StoredDetails:any)
{

  return this.HTTP.post(this.URL, StoredDetails );

}


// --------------------------------------------------

LoginFunction(LoginInformation:any)
{
  return this.HTTP.post(this.LOGINURL,LoginInformation);
}

// --------------------------------------------------

}
