import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coder',
  templateUrl: './coder.component.html',
  styleUrls: ['./coder.component.css']
})
export class CoderComponent implements OnInit {
  selectedBrands: any[] = [];


  showSystems() {
    console.log(this.answerService.osSystems);
    console.log(this.answerService.brandChoices);
  }

  constructor(public answerService: AnswersService, public router: Router) { }

  ngOnInit(): void {
    this.selectedBrands = this.answerService.brandChoices; //retrieve brand selections from Brand Component
  }

}
