import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AnswersService } from 'src/app/answers.service';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/user.service';
import { Options, LabelType, ChangeContext, PointerType } from "@angular-slider/ngx-slider";

@Injectable()
@Component({
  selector: 'app-budget-range',
  templateUrl: './budget-range.component.html',
  styleUrls: ['./budget-range.component.css']
})
export class BudgetRangeComponent implements OnInit {
  public budget: string = ''; //store the final budget as a range
  minValue: number = 400;
  maxValue: number = 900;
  options: Options = {
    floor: 0,
    ceil: 10000, //new budget limit of $10,000
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

  logText: string = ''; //can be used for testing

  onUserChangeStart(changeContext: ChangeContext): void {
    this.logText += `onUserChangeStart(${this.getChangeContextString(changeContext)})\n`;
  }

  onUserChange(changeContext: ChangeContext): void {
    this.logText += `onUserChange(${this.getChangeContextString(changeContext)})\n`;
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.logText += `onUserChangeEnd(${this.getChangeContextString(changeContext)})\n`;
  }

  getChangeContextString(changeContext: ChangeContext): void {
    this.budget = changeContext.value.toString() + ' - ' + changeContext.highValue?.toString();
    this.answerService.confirmedBudget = this.budget; //send user's input on slider to answer service


    // return `{pointerType: ${changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'}, ` +
    //        `value: ${changeContext.value}, ` +
    //        `highValue: ${changeContext.highValue}}`;
  }

  constructor(public answerService: AnswersService) { }

  ngOnInit(): void {
  }

}
