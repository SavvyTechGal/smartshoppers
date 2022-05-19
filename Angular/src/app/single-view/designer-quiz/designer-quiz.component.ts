import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AnswersService } from 'src/app/answers.service';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-designer-quiz',
  templateUrl: './designer-quiz.component.html',
  styleUrls: ['./designer-quiz.component.css']
})
export class DesignerQuizComponent implements OnInit {
  userEmail: string = '';
  newUser: boolean = false;  //if user is registered in db
  public currentRole: any;
  displayRole = false;
  entireQuiz = false;
  //bools to check which quiz version to display
  casualUser = false;

  public submitted: boolean = false;

  //keys used for accessing form values
  public OSKeys:any[] = ['Windows', 'Mac', 'Chrome'];  
  public brandKeys:any[] = ['Acer','Apple','ASUS', 'Dell','HP','Lenovo','Microsoft'];

  public AnswersObject: any = {  //will hold edited responses onSubmit
    role:'',
    budget: '',
    os:[],
    osRank: '',
    brands:[],
    brandRank:'',
    storeDesign:'no',
    storeDesignRank:'',
    severalEditors:'no',
    severalEditorsRank:'',
    tablet:'no',
    tabletRank:'',
    convertible:'no',
    convertibleRank:'',
    travel:'no',
    travelRank:'',
    storage: 'no',
    storageRank: '',
    charges: 'no',
    chargesRank: '',
    speed: 'no',
    speedRank: '',
    heated:'no',
    heatedRank:''
  }


  onSubmit(quizanswers: { value: any; }) //takes in all answers (just checkboxes) from the questionnaire
  {
    for(const brand in this.brandKeys) {
      let key = this.brandKeys[brand];
      if((quizanswers.value)[key]) {
        this.AnswersObject.brands.push(key);
      }
    }

    this.AnswersObject.brandRank = (quizanswers.value.brandRank).toString();

    for(const OS in this.OSKeys) {
      let key = this.OSKeys[OS];
      if((quizanswers.value)[key]) {
        this.AnswersObject.os.push(key);
      }
    }

    this.AnswersObject.osRank = (quizanswers.value.osRank).toString();

    if(quizanswers.value.storeDesign) {
      this.AnswersObject.storeDesign = 'yes';
    }

    this.AnswersObject.storeDesignRank = (quizanswers.value.storeDesignRank).toString();
    
    if(quizanswers.value.severalEditors) {
      this.AnswersObject.severalEditors = 'yes';
    }

    this.AnswersObject.severalEditorsRank = (quizanswers.value.severalEditorsRank).toString();
    
    if(quizanswers.value.tablet) {
      this.AnswersObject.tablet = 'yes';
    }

    this.AnswersObject.tabletRank = (quizanswers.value.tabletRank).toString();
    
    if(quizanswers.value.convertible) {
      this.AnswersObject.convertible = 'yes';
    }

    this.AnswersObject.convertibleRank = (quizanswers.value.convertibleRank).toString();
    

    if(quizanswers.value.travel) {
      this.AnswersObject.travel = 'yes';
    }

    this.AnswersObject.travelRank = (quizanswers.value.travelRank).toString();
    
    if(quizanswers.value.storage) {
      this.AnswersObject.storage = 'yes';
    }

    this.AnswersObject.storageRank = (quizanswers.value.storageRank).toString();
   
    if(quizanswers.value.charges) {
      this.AnswersObject.charges = 'yes';
    }

    this.AnswersObject.chargesRank = (quizanswers.value.chargesRank).toString();
   
    if(quizanswers.value.speed) {
      this.AnswersObject.speed = 'yes';
    }

    this.AnswersObject.speedRank = (quizanswers.value.speedRank).toString();
    
    if(quizanswers.value.heated) {
      this.AnswersObject.heated = 'yes';
    }

    this.AnswersObject.heatedRank = (quizanswers.value.heatedRank).toString();

    this.AnswersObject.budget = this.answerService.confirmedBudget; //get user's budget from answer service
    
    this.submitted = true;
    //console.log(this.AnswersObject); //print out responses

    // this.answerService.postAnswer(this.userEmail, '11', this.AnswersObject.storeDesign, this.AnswersObject.storeDesignRank);
    // this.answerService.postAnswer(this.userEmail, '12', this.AnswersObject.severalEditors, this.AnswersObject.severalEditors);
    // this.answerService.postAnswer(this.userEmail, '13', this.AnswersObject.tablet, this.AnswersObject.tabletRank);
    // this.answerService.postAnswer(this.userEmail, '14', this.AnswersObject.convertible, this.AnswersObject.convertibleRank);
    // this.answerService.postAnswer(this.userEmail, '2', this.AnswersObject.travel, this.AnswersObject.travelRank);
    // this.answerService.postAnswer(this.userEmail, '3', this.AnswersObject.os, this.AnswersObject.osRank);
    // this.answerService.postAnswer(this.userEmail, '4', this.AnswersObject.brands, this.AnswersObject.brandRank);
    // this.answerService.postAnswer(this.userEmail, '5', this.AnswersObject.storage, this.AnswersObject.storageRank);
    // this.answerService.postAnswer(this.userEmail, '6', this.AnswersObject.charges, this.AnswersObject.chargesRank);
    // this.answerService.postAnswer(this.userEmail, '7', this.AnswersObject.speed, this.AnswersObject.speedRank);
    // this.answerService.postAnswer(this.userEmail, '8', this.AnswersObject.heated, this.AnswersObject.heatedRank);
    // this.answerService.postAnswer(this.userEmail, '21', this.AnswersObject.budget, '1');
    

  }


  constructor( public answerService: AnswersService, public auth: AuthService, public userInfo: UserService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => { 
        this.userEmail = profile?.email as string;  //retrieve email from auth service
       }
   )
  }

}
