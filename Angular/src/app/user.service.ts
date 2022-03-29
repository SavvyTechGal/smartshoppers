import { Injectable } from '@angular/core';
import { UserClass } from './user-class.model';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private newUser: any;

  constructor(public auth:AuthService) { }

  //change to http get
  getUser(email: string): UserClass {
    //check if email is registered in table
    //if yes --> return user model object
    //if no --> return empty object?
    console.log("----------getUser-----------");
    let testUser = new UserClass("fname","lname",email,"role");
    //return this.http.get<UserClass>(this._url);
    
    return testUser;
  }

  //change to http POST
  addUser(firstName: string, lastName: string, role: string, email: string) {  
    console.log("add user()-------")
    this.newUser = new UserClass(firstName, lastName,role, email);
    this.newUser.displayUser();
    //return this.http.post<UserClass>(this._url);
  }

  //change to http get
  getSavedData(email:string) {
    //call savedProducts backend
    //return array of products
    //return this.http.get<ProductClass[]>(this._url);
  }
}
