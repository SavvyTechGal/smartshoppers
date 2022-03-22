import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public captchaResolved : boolean = false;

  checkCaptcha(captchaResponse : string) {
     this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
  }
  
  onSubmit(loginForm: { value: any; }) {
    console.log(loginForm.value);  //object form
    console.log(loginForm.value.username);
    console.log(loginForm.value.password);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
