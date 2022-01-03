import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    let id = this.route.snapshot.params.id;
    console.log(id);

  }
}
