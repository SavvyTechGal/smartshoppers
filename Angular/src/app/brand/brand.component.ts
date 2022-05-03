import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  selectedSystems: any[] = [];
  brandsArray: any[] = [];

  addAnswer(quizanswers: { value: any; }) {
    console.log (quizanswers.value);
    for (let key in quizanswers.value) //looping over form object
    {
      if((quizanswers.value)[key] === true)
      {
        console.log(key);
        this.brandsArray.push(key); //add the brands that were selected to brandsArray
      }
    }
    this.router.navigateByUrl("/home"); //no longer routes to several-apps
  }

  showSystems() {
    console.log(this.answerService.osSystems);
  }
  showBrands() {
    console.log(this.answerService.brandChoices);
  }

  constructor(public answerService: AnswersService, public router: Router) { }

  ngOnInit(): void {
    this.selectedSystems = this.answerService.osSystems; //retrieve OS selections from OS Component
    // this.answerService.brandChoices = this.brandsArray;
    this.answerService.arrayObject.brandSelections.brands = this.brandsArray; //store brand selections in answer service
  }
}