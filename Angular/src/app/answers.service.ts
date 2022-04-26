import { Injectable } from '@angular/core';
import { Answers } from './answers-class.model';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { UserClass } from './user-class.model';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  //create a temporary hold for questionnaire answers before sending them to backend
  osSystems: any[] = []; //rename
  brandChoices: any[] = [];
  severalAppsChoice: any[] = []; //has problem accepting single string
  travelerChoice: any[] = [];

  constructor(public auth:AuthService, public HttpClient:HttpClient) { }

  postAnswer(email: string, id: string, answer: any) { //changed id from number to string; answers cannot be bools/numbers
    let request =
    this.HttpClient.post(`http://127.0.0.1:5000/addanswer`,
    {
      "email": email,
      "id" : id,
      "answer" : answer
    });

    request.subscribe((data) => {
      console.log(data); })
    };

  //change to http get (savedProducts db)
  getSavedData(email:string) {  //: Observable<ProductClass[]>
    //return this.http.get<ProductClass[]>(this._url);
  }
}

