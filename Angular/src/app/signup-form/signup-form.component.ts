import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '@auth0/auth0-angular';



@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  @Input() email = '';
  @Output() SignInEvent = new EventEmitter<boolean>();

  public captchaResolved : boolean = false;

  checkCaptcha(captchaResponse : string) {
     this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
  }

  public user: any;

  //takes form values + sends to backend to add user
  onSubmit(signupForm: { value: any; }) {  
    let fname = signupForm.value.firstname;
    let lname = signupForm.value.lastname;
    let role = signupForm.value.roleSel;
    console.log(`email in signup: ${this.email}`);
    this.userService.addUser(fname,lname,role,this.email);
    //.subscribe
    
    let state: boolean = true;
    this.SignInEvent.emit(state);
    
    
  }


  constructor(public auth: AuthService, public userService: UserService) { }

  ngOnInit(): void {
  }

}
