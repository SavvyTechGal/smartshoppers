import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../user.service';
import { DevQuizComponent } from './dev-quiz/dev-quiz.component';
import { BudgetRangeComponent } from './budget-range/budget-range.component';
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css'],
  providers: [
    DevQuizComponent, // added class in the providers,
    BudgetRangeComponent
  ]
})
export class SingleViewComponent implements OnInit {
  userEmail: string = '';

  newUser: boolean = false;  //if user is registered in db
  public currentRole: any;

  displayRole = false; //to render the user's role in the view
  entireQuiz = false; //to render a version of the questionnaire in the view

  //bools to check which quiz version to display
  casualUser = false;

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
        console.log(this.currentRole);
      }
    });
    this.displayRole = true;
  }

  correctRole() { //render the correct version of the questionnaire according to user's role
    this.entireQuiz = true;
    if(this.currentRole === 'Casual User') {
      this.casualUser = true;
    }
  }

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };

  constructor( public answerService: AnswersService, public auth: AuthService, public userInfo: UserService, public softwareDevQuiz: DevQuizComponent) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => { 
        this.userEmail = profile?.email as string;  //retrieve email from auth service
       }
   )
  }

}
