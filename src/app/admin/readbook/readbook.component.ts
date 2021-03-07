import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.component.html',
  styleUrls: ['./readbook.component.css']
})
export class ReadbookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  PHPBookForm = new FormGroup({
    name: new FormControl(''),
  })

  get name(){return this.PHPBookForm.get('name')}

  fetchAnswer()
  {
    console.warn(this.PHPBookForm.value);
  }
}
