import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})
export class OsComponent implements OnInit {

  public userEmail:string = '';
  answerArray: any[] = [];

  addAnswer(quizanswers: { value: any; }) { //try filtering untouched boxes from the form (loop to add to array)
    let selectWindows = quizanswers.value.windows;
    if (!selectWindows) { selectWindows = false;} //if the checkbox was untouched, set the form value to false
    else {this.answerArray.push("Windows")};
    console.log(selectWindows); //for testing
    let selectMac = quizanswers.value.mac;
    if (!selectMac) { selectMac = false;}
    else {this.answerArray.push("Mac")};
    console.log(selectMac); //for testing
    // console.log(this.userEmail); //for testing
    let selectChrome = quizanswers.value.chrome;
    if (!selectChrome) { selectChrome = false;} 
    else {this.answerArray.push("Chrome")};
    console.log(selectChrome); //for testing
    console.log(this.answerService.osSystems);
    alert("Thank you for submitting!");
    this.router.navigateByUrl("/brand"); //quick fix for duplicate additions to answerArray
    // this.answerService.postAnswer(this.userEmail, "1", String(newAnswer)); //user email, question id, quiz answer    
  }

  constructor(
    public answerService: AnswersService, public auth: AuthService, public router: Router
  ) { }

  ngOnInit(): void {
    this.answerService.osSystems = this.answerArray; //store OS selections in answer service
  }
}
