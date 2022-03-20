import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  onSubmit(signupForm: { value: any; }) {
    console.log(signupForm.value);  //object form
    console.log(signupForm.value.username);
    console.log(signupForm.value.password);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
