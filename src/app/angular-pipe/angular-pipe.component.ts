import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.css']
})
export class AngularPipeComponent implements OnInit
{

  constructor() { }

  public curruntDate: Date | undefined;
  public webTitle: string = "Angular Pipe";
  public shortNote: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam modi, minima tenetur corporis quod quisquam sapiente voluptates alias, accusantium fugiat excepturi nihil repudiandae laboriosam";

  public authorName: string = "Om Parkash Pandey";

  public usersDetails: object = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
  ];


  ngOnInit(): void
  {

    this.curruntDate = new Date();
  }

}
