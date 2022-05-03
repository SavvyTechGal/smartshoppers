import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})
export class OsComponent implements OnInit {

  public userEmail: string = '';
  answerArray: any[] = [];

  addAnswer(quizanswers: { value: any; }) {
    console.log (quizanswers.value);

    for (let key in quizanswers.value) //looping over form object
    {
      if((quizanswers.value)[key] === true)
      {
        console.log(key);
        this.answerArray.push(key); //add the os systems that were selected to answerArray
      }
    }
    
    this.router.navigateByUrl("/brand"); //quick fix for duplicate additions to answerArray
    // this.answerService.postAnswer(this.userEmail, "1", String(newAnswer)); //user email, question id, quiz answer    
  }

  constructor(
    public answerService: AnswersService, public auth: AuthService, public router: Router, public userInfo: UserService
  ) { }

  ngOnInit(): void {
    // this.answerService.osSystems = this.answerArray;
    this.answerService.arrayObject.osSelections.os = this.answerArray; //store OS selections in answer service
  }
}