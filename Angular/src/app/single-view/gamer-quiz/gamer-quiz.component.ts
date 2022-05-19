import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AnswersService } from 'src/app/answers.service';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/user.service';

@Injectable()
@Component({
  selector: 'app-gamer-quiz',
  templateUrl: './gamer-quiz.component.html',
  styleUrls: ['./gamer-quiz.component.css']
})
export class GamerQuizComponent implements OnInit {
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
    stream:'no',
    streamRank:'',
    ports:'no',
    portsRank:'',
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

    if(quizanswers.value.stream) {
      this.AnswersObject.stream = 'yes';
    }

    this.AnswersObject.streamRank = (quizanswers.value.streamRank).toString();
    
    if(quizanswers.value.ports) {
      this.AnswersObject.ports = 'yes';
    }

    this.AnswersObject.portsRank = (quizanswers.value.portsRank).toString();
    

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
    
    this.submitted = true;
    //console.log(this.AnswersObject); //print out responses

    // this.answerService.postAnswer(this.userEmail, '9', this.AnswersObject.stream, this.AnswersObject.streamRank);
    // this.answerService.postAnswer(this.userEmail, '10', this.AnswersObject.ports, this.AnswersObject.portsRank);
    // this.answerService.postAnswer(this.userEmail, '2', this.AnswersObject.travel, this.AnswersObject.travelRank);
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
