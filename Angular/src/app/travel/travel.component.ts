import { Component, OnInit } from '@angular/core';
import { Answers } from '../answers-class.model';
import { AnswersService } from '../answers.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  // @Output() SendAnswerEvent = new EventEmitter<boolean>();
  AnswersModel = new Answers(false);
  
  addAnswer(quizanswers: { value: any; }) {
    let newAnswer = quizanswers.value.answer;
    console.log(newAnswer); //for testing
    alert("Thank you for submitting!");
    this.answerService.postAnswer("test@test.com", 1, newAnswer); //sample email and id, will retrieve email later
    //.subscribe
    
  }

  constructor(
    public answerService: AnswersService
  ) { }



  ngOnInit(): void {
    // this.answerService.addAnswer(this.newAnswer);
  }

}
