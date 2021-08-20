import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMessengerService {

  URL = "http://localhost/StrongFacts/public/index.php/StrongFacts/transaction";

  LOGINURL = "http://localhost/StrongFacts/public/index.php/StrongFacts/Login";

  UsersDetails = "https://jsonplaceholder.typicode.com/users";

  GetAllCovidDetails = "https://api.covid19api.com/";

  GetAllNodeFileUsers = "http://localhost:9000/node/local/users";

  constructor(private HTTP: HttpClient) {

  }
  // --------------------------------------------------

  InsertSignupValue(StoredDetails: any) {

    return this.HTTP.post(this.URL, StoredDetails);

  }


  // --------------------------------------------------

  LoginFunction(LoginInformation: any) {
    return this.HTTP.post(this.LOGINURL, LoginInformation);
  }

  // --------------------------------------------------

  FetchAllUsersDetails() {
    return this.HTTP.get(this.UsersDetails);
  }

  // --------------------------------------------------

  FetchCovidDetails() {
    return this.HTTP.get(this.GetAllCovidDetails);
  }

  GetAllNodeFileUsersDetails() {
    return this.HTTP.get(this.GetAllNodeFileUsers);
  }

  // --------------------------------------------------

}
