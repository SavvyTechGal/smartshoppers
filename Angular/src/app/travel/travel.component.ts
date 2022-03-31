import { Component, OnInit } from '@angular/core';
import { Answers } from '../answers-class.model';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  AnswersModel = new Answers(false);
  onSubmit(quizanswers: { value: any; }) {
    console.log(quizanswers.value);  //object form
  }
  constructor(
    public answerService: AnswersService
  ) { }


  // isNewUser(email: string): void {
    
  //   const returnedUser = this.userService.getUser(this.userEmail); //should return observable later
  //   //.subscribe...
  //   returnedUser.displayUser();   //testing
  //   if(true) {   //returnedUser is empty
  //     console.log("yes new user--> display account details");     //testing
  //     this.newUser=true; //set newUser 
  //   }
  //   else {      //not a new user
  //     console.log("NOT a new user, --> display profile");         //testing
  //     this.getUserData(this.userEmail); //returnedUser is user object, still needed saved product info
      
  //   }
  // }

  ngOnInit(): void {
  }

}
