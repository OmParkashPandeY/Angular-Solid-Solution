import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-php-book',
  templateUrl: './php-book.component.html',
  styleUrls: ['./php-book.component.css']
})
export class PhpBookComponent implements OnInit {

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
