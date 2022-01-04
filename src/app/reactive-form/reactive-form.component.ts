import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit
{

  constructor() { }

  public myReactiveForm!: FormGroup;

  ngOnInit(): void
  {
    this.createMyReactiveForm();
  }


  public createMyReactiveForm()
  {
    this.myReactiveForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'address': new FormControl(null, Validators.required),
    });
  }

  public submitMyForm()
  {

    var formData = this.myReactiveForm;
    if (formData.valid)
    {
      console.log(formData.value);
    } else
    {
      window.alert("This is invalid Form");
    }

  }

  public formValidationError(fieldName: any, fieldForm: FormGroup)
  {
    var FD = fieldForm.controls;
    if (FD[fieldName] && FD[fieldName].invalid && FD[fieldName].touched)
    {
      if (fieldForm.get(fieldName)!.errors &&
        fieldForm.get(fieldName)!.hasError('required'))
      {
        console.log("Required Error");
      }
      if (fieldForm.get(fieldName)!.errors &&
        fieldForm.get(fieldName)!.hasError('email'))
      {
        console.log("Email Error");
      }
      return true;
    } else
    {
      return false;
    }
  }

}
