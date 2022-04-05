import { Component, OnInit } from '@angular/core';
import { Answers } from '../answers-class.model';
import { AnswersService } from '../answers.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  // AnswersModel = new Answers(false);
  
  public userEmail:string = '';

  addAnswer(quizanswers: { value: any; }) {
    let newAnswer = quizanswers.value.answer;
    if (!newAnswer) { newAnswer = false;} //if the checkbox was untouched, set the form value to false
    console.log(newAnswer); //for testing
    console.log(this.userEmail); //for testing
    alert("Thank you for submitting!");
    this.answerService.postAnswer(this.userEmail, "1", String(newAnswer)); //user email, question id, quiz answer    
  }

  constructor(
    public answerService: AnswersService, public auth: AuthService
  ) { }



  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => { 
        this.userEmail = profile?.email as string;  //retrieve email from auth service
       }
   )
  }

}
