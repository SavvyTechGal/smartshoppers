import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.css']
})
export class CompletionComponent implements OnInit {
  Budget: string = '';
  userRole: string = '';
  userOS: string[] = [];
  userBrands: string[] = [];

  constructor(public answerService: AnswersService) { }

  ngOnInit(): void {
    console.log('hi');
    this.userRole = this.answerService.arrayObject.userRole.role;
    this.Budget = this.answerService.arrayObject.userBudget.budget;
    this.userOS = this.answerService.arrayObject.osSelections.os;
    this.userBrands = this.answerService.arrayObject.brandSelections.brands;
    console.log(this.answerService.arrayObject.userBudget.budget);
  }

}
