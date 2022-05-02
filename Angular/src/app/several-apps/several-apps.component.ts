import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-several-apps',
  templateUrl: './several-apps.component.html',
  styleUrls: ['./several-apps.component.css']
})
export class SeveralAppsComponent implements OnInit {
  runApps: any[] = [];
  popup: boolean = false;

  chooseYes(){ //using click actions to record answer 
    if(this.runApps.length !== 0) { this.runApps = [];} //empty array
    this.runApps.push("Yes");
    console.log(this.runApps);
    this.router.navigateByUrl("/travel"); //quick fix for duplicate additions to runApps
  }

  chooseNo(){
    if(this.runApps.length !== 0) { this.runApps = [];}
    this.runApps.push("No");
    console.log(this.runApps); 
    // console.log("see here -->", this.answerService.severalAppsChoice);
    this.router.navigateByUrl("/travel"); //quick fix for duplicate additions to runApps
  }

  constructor(public answerService: AnswersService, public router: Router) { }

  ngOnInit(): void {
    this.answerService.severalAppsChoice = this.runApps; //store answer in answer service
  }

}
