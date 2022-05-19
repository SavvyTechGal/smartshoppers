import { Injectable } from '@angular/core';
import { Answers } from './answers-class.model';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { UserClass } from './user-class.model';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  //IGNORE START
  //create a temporary hold for questionnaire answers before sending them to backend
  osSystems: any[] = []; 
  brandChoices: any[] = [];
  severalAppsChoice: any[] = []; //has problem accepting single string
  travelerChoice: any[] = [];

  jsonFormat: JSON;
  arrayObject: any = {
   userRole: {
      id: 1,
      role: ""
    },

    userBudget: { //id, answer, rank
      id: 2,
      budget: ""
    },

    osSelections: {
      id: 3,
      os: [],
      rank: 0
    },

    brandSelections: {
      id: 4,
      brands: [],
      rank: 0
    }
};
//IGNORE END
  confirmedBudget: string = ''; //to receive budget from budget-range component, and share it with any component

  constructor(public auth:AuthService, public HttpClient:HttpClient) { 
    this.jsonFormat = <JSON>this.arrayObject; //convert object into json format
  }

  postAnswer(email: string, id: string, answer: any, rank: string) { //changed id from number to string; answers cannot be bools/numbers
    let request =
    this.HttpClient.post(`https://smartshoppersflaskv2.us-east-1.elasticbeanstalk.com/addanswer`,
    {
      "email": email,
      "id" : id,
      "answer" : answer,
      "rank" : rank //I haven't changed this in the app.py
    });

    request.subscribe((data) => {
      console.log(data); })
    };

  //change to http get (savedProducts db)
  getSavedData(email:string) {  //: Observable<ProductClass[]>
    //return this.http.get<ProductClass[]>(this._url);
  }
}

