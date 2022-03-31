import { Injectable } from '@angular/core';
import { UserClass } from './user-class.model';
import { AuthService } from '@auth0/auth0-angular';
import { ProductClass } from './product-class.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private newUser: any;
  private _url = `http://127.0.0.1:5000/users`

  constructor(public auth:AuthService, public HttpClient:HttpClient) { }

  //change to http get (user db)
  getUser(email: string) {  //change to : Observable<UserClass>
    //check if email is registered in table
    //if yes --> return user model object
    //if no --> return empty object?
    //let testUser = new UserClass("fname","lname",email,"role"); //for testing purposes
    //return this.http.get<UserClass>(this._url);

    let request =
    this.HttpClient.post(`http://127.0.0.1:5000/getusers`,
    {
      "email": email,
    })

    request.subscribe((data) => {
      console.log(data); })

    
    
    //return testUser;

  }
  

  //change to http POST (user db)
  addUser(firstName: string, lastName: string, role: string, email: string) { //: Observable<UserClass> 
    // this.newUser = new UserClass(firstName, lastName,role, email);
    //this.newUser.displayUser();  //testing purposes
    let request =
    this.HttpClient.post(this._url,
    {
      "email": email,
      "firstName": firstName,
      "lastName": lastName,
      "role": role,
    })

    request.subscribe((data) => {
      console.log(data); })
    }

  //change to http get (savedProducts db)
  getSavedData(email:string) {  //: Observable<ProductClass[]>
    //return this.http.get<ProductClass[]>(this._url);
  }
}
