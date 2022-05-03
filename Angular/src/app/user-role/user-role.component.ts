import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  public userEmail: string = '';
  public currentRole: any;
  newUser: boolean = false;  //if user is registered in db
  displayRole = false;

  confirmRole() {
    this.userInfo.getUser(this.userEmail) //retrieve user's role
    .subscribe((data) => {
      if(data == null) {
        console.log("data is null");  //if user not found in db -> not registered yet -> direct to signupform
        this.newUser = true;
      }
      else {    //if user returned 
        this.currentRole = Object.values(data)[3];
        console.log(Object.values(data)[3]); 
      }
    });
    this.displayRole = true;
  }

  correctRole() {
    this.answerService.arrayObject.userRole.role = this.currentRole;
    this.router.navigateByUrl("/budget");
    console.log(this.answerService.arrayObject.userRole);
  }

  constructor(
    public answerService: AnswersService, public auth: AuthService, public router: Router, public userInfo: UserService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => { 
        this.userEmail = profile?.email as string;  //retrieve email from auth service
       }
   )
   
  }

}