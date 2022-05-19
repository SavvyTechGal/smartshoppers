import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../user.service';
import { DevQuizComponent } from './dev-quiz/dev-quiz.component';
import { StudentQuizComponent } from './student-quiz/student-quiz.component';
import { CasualQuizComponent } from './casual-quiz/casual-quiz.component';
import { BudgetRangeComponent } from './budget-range/budget-range.component';
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css'],
  providers: [
    DevQuizComponent, // added class in the providers,
    BudgetRangeComponent,
    StudentQuizComponent,
    CasualQuizComponent
  ]
})
export class SingleViewComponent implements OnInit {
  userEmail: string = '';

  newUser: boolean = false;  //if user is registered in db
  public currentRole: any;

  displayRole = false; //to render the user's role in the view
  entireQuiz = false; //to render a version of the questionnaire in the view

  //bools to check which quiz version to display
  softwareDev = false;
  gamer = false;
  designer = false;
  casualUser = false;
  student = false;


  confirmRole() {
    this.userInfo.getUser(this.userEmail) //retrieve user's role
    .subscribe((data) => {
      if(data == null) {
        console.log("data is null");  //if user not found in db -> not registered yet -> direct to signupform
        this.newUser = true;
      }
      else {    //if user returned 
        this.currentRole = Object.values(data)[3];
      }
    });
    this.displayRole = true;
  }

  correctRole() { //render the correct version of the questionnaire according to user's role
    this.entireQuiz = true;
    if(this.currentRole === 'Software Developer') {
      this.softwareDev = true;
    }
    if(this.currentRole === 'Gamer') {
      this.gamer = true;
    }
    if(this.currentRole === 'Graphic Designer') {
      this.designer = true;
    }
    
    if(this.currentRole === 'Casual User') {
      this.casualUser = true;
    }
    if(this.currentRole === 'Student') {
      this.student = true;
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
        this.confirmRole();
       }
       
       
   )
   
  }

}
