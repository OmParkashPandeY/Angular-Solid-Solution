import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ApiMessengerService } from '../api-messenger/api-messenger.service';
// import { Aos } from 'aos'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private ServiceObject: ApiMessengerService) { }


  //----------------------------------------------------------
  ngOnInit(): void {
    Aos.init();
    this.getAllNodeUsersDetails();
    this.getAllUsersDetails();
    this.getAllCovidDetails();

  }


  //----------------------------------------------------------
  ArrayOfUsers: any = [];
  getAllUsersDetails() {
    this.ServiceObject.FetchAllUsersDetails().subscribe((Result) => {
      console.warn(Result);
      this.ArrayOfUsers = Result;
    });

  }

  //----------------------------------------------------------
  ArrayOfCovidDetails: any = [];
  getAllCovidDetails() {
    this.ServiceObject.FetchCovidDetails().subscribe((Result) => {
      console.warn(Result);
      this.ArrayOfCovidDetails = [Result];
    });

  }
  //----------------------------------------------------------
  ArrayOfNodeUsersDetails: any = [];
  getAllNodeUsersDetails() {
    this.ServiceObject.GetAllNodeFileUsersDetails().subscribe((Result) => {

      this.ArrayOfNodeUsersDetails = Result;
      console.warn(this.ArrayOfNodeUsersDetails);
    });

  }
  //----------------------------------------------------------
}
