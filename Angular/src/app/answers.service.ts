import { Injectable } from '@angular/core';
import { Answers } from './answers-class.model';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { UserClass } from './user-class.model';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(public auth:AuthService, public HttpClient:HttpClient) { }


  //change to http POST (user db)
  addAnswer(email: string, id: number, answer: any) {
    let request =
    this.HttpClient.post(`http://127.0.0.1:5000/answers`,
    {
      "email": email,
      "id" : id,
      "answer" : answer
    })

    request.subscribe((data) => {
      console.log(data); })
    }

  //change to http get (savedProducts db)
  getSavedData(email:string) {  //: Observable<ProductClass[]>
    //return this.http.get<ProductClass[]>(this._url);
  }
}

