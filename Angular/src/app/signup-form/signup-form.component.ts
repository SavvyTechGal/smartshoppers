import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  public captchaResolved : boolean = false;

  checkCaptcha(captchaResponse : string) {
     this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
  }

  public user: any;

  public userEmail: string = '';

  //@param = signupform
  //takes in form values, gets auth email 
  //calls createUser + reloads page
  onSubmit(signupForm: { value: any; }) {  
    let fname = signupForm.value.firstname;
    let lname = signupForm.value.lastname;
    let role = signupForm.value.roleSel;

    this.auth.user$.subscribe(
      (profile) => {
        this.userEmail = profile?.email as string;  //saving email to variable
        this.userService.createUser(fname,lname,role,this.userEmail); //create user in table
      }
    );
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    
  }


  constructor(public auth: AuthService, public userService: UserService) { }

  ngOnInit(): void {
  }

}
