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
    let selectAcer = quizanswers.value.acer;
    if (!selectAcer) { selectAcer = false;}
    else {this.brandsArray.push("Acer")};
    console.log(selectAcer);

    let selectApple = quizanswers.value.apple;
    if (!selectApple) { selectApple = false;}
    else {this.brandsArray.push("Apple")};
    console.log(selectApple);

    let selectAsus = quizanswers.value.asus;
    if (!selectAsus) { selectAsus = false;}
    else {this.brandsArray.push("Asus")};
    console.log(selectAsus);

    let selectDell = quizanswers.value.dell;
    if (!selectDell) { selectDell = false;}
    else {this.brandsArray.push("Dell")};
    console.log(selectDell);

    let selectHP = quizanswers.value.hp;
    if (!selectHP) { selectHP = false;}
    else {this.brandsArray.push("HP")};
    console.log(selectHP);

    let selectLenovo = quizanswers.value.lenovo;
    if (!selectLenovo) { selectLenovo = false;}
    else {this.brandsArray.push("Lenovo")};
    console.log(selectLenovo);

    let selectMicrosoft = quizanswers.value.microsoft;
    if (!selectMicrosoft) { selectMicrosoft = false;}
    else {this.brandsArray.push("Microsoft")};
    console.log(selectMicrosoft);

    alert("Thank you for submitting!");
    this.router.navigateByUrl("/several-apps"); //no longer routes to coder 
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
    this.answerService.brandChoices = this.brandsArray; //store brand selections in answer service
  }
}
