import { Injectable } from '@angular/core';
import { UserClass } from './user-class.model';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public newUser: any;

  constructor(public auth:AuthService) { }

  getUser(email: string): UserClass {
    //check if email is registered in table
    //if yes --> return user model object
    //if no --> return empty object?
    console.log("----------getUser-----------");
    let testUser = new UserClass("fname","lname",email,"role");
    
    return testUser;
  }

  createUser(firstName: string, lastName: string, role: string, email: string) {
    console.log("createUser()----");
    this.newUser = new UserClass(firstName, lastName,role, email);
    //this.newUser.displayUser(); 
    //this.putUser(this.newUser);
    
  }

  putUser(user: UserClass) {
    console.log("put user()-------")
    //send to backend
  }

  //get user saved products
  getSavedData(email:string) {
    //call savedProducts backend
    //return array of products
  }
}
