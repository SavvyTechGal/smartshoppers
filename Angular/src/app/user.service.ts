import { Injectable } from '@angular/core';
import { UserClass } from './user-class.model';
import { AuthService } from '@auth0/auth0-angular';
import { ProductClass } from './product-class.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private newUser: any;

  constructor(public auth:AuthService) { }

  //change to http get (user db)
  getUser(email: string): UserClass {  //change to : Observable<UserClass>
    //check if email is registered in table
    //if yes --> return user model object
    //if no --> return empty object?
    let testUser = new UserClass("fname","lname",email,"role"); //for testing purposes
    //return this.http.get<UserClass>(this._url);
    
    return testUser;
  }

  //change to http POST (user db)
  addUser(firstName: string, lastName: string, role: string, email: string) { //: Observable<UserClass> 
    this.newUser = new UserClass(firstName, lastName,role, email);
    this.newUser.displayUser();  //testing purposes
    //return this.http.post<UserClass>(this._url);
  }

  //change to http get (savedProducts db)
  getSavedData(email:string) {  //: Observable<ProductClass[]>
    //return this.http.get<ProductClass[]>(this._url);
  }
}
