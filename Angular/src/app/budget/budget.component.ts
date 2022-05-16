import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  budgetRange: any;

  addAnswer(quizanswers: { value: any; }) {
    console.log(quizanswers.value.budget);
    this.budgetRange = quizanswers.value.budget;
    this.answerService.arrayObject.userBudget.budget = this.budgetRange; //store budget text in answer service
    this.router.navigateByUrl("/os");
  }
  constructor(
    public answerService: AnswersService, public auth: AuthService, public router: Router, public userInfo: UserService
  ) { }

  ngOnInit(): void {
    
    console.log(this.answerService.arrayObject.userBudget.budget);
  }

}
