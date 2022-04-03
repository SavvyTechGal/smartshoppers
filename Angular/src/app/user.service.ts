import { Injectable } from '@angular/core';
import { UserClass } from './user-class.model';
import { AuthService } from '@auth0/auth0-angular';
import { ProductClass } from './product-class.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private jsonData: any;
  private newUser: any;
  
  private baseURL = `http://127.0.0.1:5000/`

  constructor(public auth:AuthService, public HttpClient:HttpClient) { }

  //change to http get (user db)
  getUser(email: string): Observable<any> {
    
    console.log("userservice -- getUser");

    let request =
    this.HttpClient.post(this.baseURL + `getuser`,
    {
      "email": email,
    });
    return request;
    // request.subscribe((data) => {
    //   console.log(data); 
      
    //   let newEmail = Object.values(data)[0];
    //   let fname = Object.values(data)[1];
    //   let lname = Object.values(data)[2];
    //   let role = Object.values(data)[3];
    //   this.newUser = new UserClass(fname,lname,role,newEmail);
    //   console.log(this.newUser);
      
    // });
    

  }
  

  //change to http POST (user db)
  addUser(firstName: string, lastName: string, role: string, email: string) { //: Observable<UserClass> 
    // this.newUser = new UserClass(firstName, lastName,role, email);
    //this.newUser.displayUser();  //testing purposes
    console.log("addUser");
    let request =
    this.HttpClient.post(this.baseURL + `adduser`,
    {
      "email": email,
      "firstName": firstName,
      "lastName": lastName,
      "role": role,
    });

    request.subscribe((data) => {
      console.log(data); })
    };

  //change to http get (savedProducts db)
  getSavedData(email:string): Observable<any> {  
    let request =
  this.HttpClient.post(this.baseURL + `getproducts`,
  {
    "email": email,
  });
  return request;
  }
}
