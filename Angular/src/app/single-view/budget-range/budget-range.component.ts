import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AnswersService } from 'src/app/answers.service';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/user.service';
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Injectable()
@Component({
  selector: 'app-budget-range',
  templateUrl: './budget-range.component.html',
  styleUrls: ['./budget-range.component.css']
})
export class BudgetRangeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
