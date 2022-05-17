import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AnswersService } from 'src/app/answers.service';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from 'src/app/user.service';

@Injectable()
@Component({
  selector: 'app-dev-quiz',
  templateUrl: './dev-quiz.component.html',
  styleUrls: ['./dev-quiz.component.css']
})
export class DevQuizComponent implements OnInit {
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
    severalApps:'no',
    severalAppsRank:'',
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
  // severalApps: string = ''; //value changed by button click functions
  // appsRank: string = '';
  
  // traveler: string = '';
  // travelerRank: string = '';
  
  // storage: string = '';
  // storageRank: string = '';

  // manyCharges: string = '';
  // chargesRank: string = '';

  // speed: string = '';
  // speedRank: string = '';

  // heated: string = '';
  // heatedRank: string = '';

  // brandsArray: string[] = [];

  newUser: boolean = false;  //if user is registered in db
  public currentRole: any;

  displayRole = false;
  entireQuiz = false;

  //bools to check which quiz version to display
  casualUser = false;

  // yesApps(){
  //   this.severalApps = 'Yes';
  // }
  // noApps(){
  //   this.severalApps = 'No';
  // }

  // yesTravel(){
  //   this.traveler = 'Yes';
  // }
  // noTravel(){
  //   this.traveler = 'No';
  // }

  // yesStorage(){
  //   this.storage = 'Yes';
  // }
  // noStorage(){
  //   this.storage = 'No';
  // }
  
  // yesCharges(){
  //   this.manyCharges = 'Yes';
  // }
  // noCharges(){
  //   this.manyCharges = 'No';
  // }

  // yesSpeed(){
  //   this.speed = 'Yes';
  // }
  // noSpeed(){
  //   this.speed = 'No';
  // }

  // yesHeated(){
  //   this.heated = 'Yes';
  // }
  // noHeated(){
  //   this.heated = 'No';
  // }

  onSubmit(quizanswers: { value: any; }) //takes in all answers (just checkboxes) from the questionnaire
  {
    console.log('User email: ', this.userEmail);
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

    if(quizanswers.value.severalApps) {
      this.AnswersObject.severalApps = 'yes';
    }

    this.AnswersObject.severalAppsRank = (quizanswers.value.severalAppsRank).toString();
    
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
    console.log(this.AnswersObject); //print out responses

    // console.log('question 1:');
    // console.log(quizanswers.value.appsRank);
    // console.log(this.severalApps);

    // console.log('question 2:');
    // console.log(quizanswers.value.travelerRank);
    // console.log(this.traveler);

    // console.log('question 3 and 4:');
    // for (let key in quizanswers.value) //looping over form object
    // {
    //   if((quizanswers.value)[key] === true)
    //   {
    //     console.log(key);
    //     this.brandsArray.push(key); //add os AND brand choices to brandsArray (CAN FIX IF THIS IS A PROBLEM)
    //   }
    // }
    // console.log(this.brandsArray);
    // console.log(quizanswers.value.osRank);
    // console.log(quizanswers.value.brandsRank);
    
    // console.log('question 5:');
    // console.log(quizanswers.value.storageRank);
    // console.log(this.storage);

    // console.log('question 6:');
    // console.log(quizanswers.value.chargesRank);
    // console.log(this.manyCharges);

    // console.log('question 7:');
    // console.log(quizanswers.value.speedRank);
    // console.log(this.speed);

    // console.log('question 8:');
    // console.log(quizanswers.value.heatedRank);
    // console.log(this.heated);


    // this.answerService.postAnswer(this.userEmail, '1', this.severalApps, this.appsRank);

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
