import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AnswersService } from 'src/app/answers.service';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/user.service';

@Injectable()
@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.css']
})
export class StudentQuizComponent implements OnInit {
  userEmail: string = '';

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
    longCommute:'no', //unique to this version -- START
    longCommuteRank:'',
    videoComms:'no',
    videoCommsRank:'', ////unique to this version -- END
    storage: 'no',
    storageRank: '',
    charges: 'no',
    chargesRank: '',
    speed: 'no',
    speedRank: '',
    heated:'no',
    heatedRank:''
  }

  newUser: boolean = false;  //if user is registered in db [NOT NEEDED HERE]
  public currentRole: any;

  onSubmit(quizanswers: { value: any; }) //takes in all answers (checkbox and dropdown values) from the questionnaire
  {
    console.log('User email: ', this.userEmail);

    if(quizanswers.value.longCommute) {
      this.AnswersObject.longCommute = 'yes';
    }
    this.AnswersObject.longCommuteRank = (quizanswers.value.longCommuteRank).toString();
    
    if(quizanswers.value.videoComms) {
      this.AnswersObject.videoComms = 'yes';
    }
    this.AnswersObject.videoCommsRank = (quizanswers.value.videoCommsRank).toString();
    
    //the following is common to each questionnaire --- START
    for(const brand in this.brandKeys) { //get brand selections
      let key = this.brandKeys[brand];
      if((quizanswers.value)[key]) {
        this.AnswersObject.brands.push(key);
      }
    }
    this.AnswersObject.brandRank = (quizanswers.value.brandRank).toString(); //ranking of brand question

    for(const OS in this.OSKeys) { //get OS selections
      let key = this.OSKeys[OS];
      if((quizanswers.value)[key]) {
        this.AnswersObject.os.push(key);
      }
    }
    this.AnswersObject.osRank = (quizanswers.value.osRank).toString(); //ranking of OS question

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
    console.log(this.AnswersObject); //print out responses
    //-----END

    // this.answerService.postAnswer(this.userEmail, '15', this.AnswersObject.longCommute, this.AnswersObject.longCommuteRank);
    // this.answerService.postAnswer(this.userEmail, '16', this.AnswersObject.videoComms, this.AnswersObject.videoCommsRank);

    // this.answerService.postAnswer(this.userEmail, '3', this.AnswersObject.os, this.AnswersObject.osRank);
    // this.answerService.postAnswer(this.userEmail, '4', this.AnswersObject.brands, this.AnswersObject.brandRank);
    // this.answerService.postAnswer(this.userEmail, '5', this.AnswersObject.storage, this.AnswersObject.storageRank);
    // this.answerService.postAnswer(this.userEmail, '6', this.AnswersObject.charges, this.AnswersObject.chargesRank);
    // this.answerService.postAnswer(this.userEmail, '7', this.AnswersObject.speed, this.AnswersObject.speedRank);
    // this.answerService.postAnswer(this.userEmail, '8', this.AnswersObject.heated, this.AnswersObject.heatedRank);
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
