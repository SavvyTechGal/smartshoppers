import { Component, OnInit } from '@angular/core';
import { Answers } from '../answers-class.model';
import { AnswersService } from '../answers.service';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  
  public userEmail:string = '';
  severalApps: any[] = [];
  traveler: any[] = [];

  addAnswer(quizanswers: { value: any; }) {
    let newAnswer = quizanswers.value.answer;
    if (!newAnswer) { newAnswer = false;} //if the checkbox was untouched, set the form value to false
    console.log(newAnswer); //for testing
    console.log(this.userEmail); //for testing
    alert("Thank you for submitting!");
    // this.answerService.postAnswer(this.userEmail, "1", String(newAnswer)); //user email, question id, quiz answer    
  }

  chooseYes(){ //using click actions to record answer
    this.traveler.push("Yes");
    console.log(this.userEmail); //actually role
    console.log(this.traveler);
    this.router.navigateByUrl("/home"); //quick fix for duplicate additions to runApps
  }

  chooseNo(){
    this.traveler.push("No");
    console.log(this.traveler);
    this.router.navigateByUrl("/home"); //quick fix for duplicate additions to runApps
  }

  currentAnswers() {
    console.log(this.answerService.arrayObject.osSelections.os, "<-- new change");
    console.log(this.answerService.arrayObject.brandSelections.brands, "<-- new change");
    console.log(this.answerService.severalAppsChoice);
  }

  constructor(
    public answerService: AnswersService, public auth: AuthService, public router: Router
  ) { }



  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => { 
        this.userEmail = profile?.email as string;  //retrieve email from auth service
       }
   )

  this.answerService.travelerChoice = this.traveler; //store answer in answer service
  
  }

}
