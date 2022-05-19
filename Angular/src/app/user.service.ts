import { Injectable } from '@angular/core';
import { UserClass } from './user-class.model';
import { AuthService } from '@auth0/auth0-angular';
import { ProductClass } from './product-class.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private jsonData: any;
  private newUser: any;
  
  private baseURL = `http://smartshoppersflask.us-east-1.elasticbeanstalk.com/`

  constructor(public auth:AuthService, public HttpClient:HttpClient) { }

  //change to http get (user db)
  getUser(email: string): Observable<any> {
    let request =
    this.HttpClient.post(this.baseURL + `getuser`,
    {
      "email": email,
    });
    return request
    .pipe(
      catchError(this.handleError<UserClass>('getUser', { firstName: '', lastName: '', email: '', role: ''}))
    );  //return empty user model if error
  }
  
  editUser(firstName: string, lastName: string, role: string, email: string) {
    // let request =
    // this.HttpClient.put(this.baseURL + `...`,  
    // {
    //   "email": email,
    //   "firstName": firstName,
    //   "lastName": lastName,
    //   "role": role,
    // });
    // return request;
  }

  //change to http POST (user db)
  addUser(firstName: string, lastName: string, role: string, email: string) { 
    let request =
    this.HttpClient.post(this.baseURL + `adduser`,
    {
      "email": email,
      "firstName": firstName,
      "lastName": lastName,
      "role": role,
    });
    request.subscribe((data) => {
      //console.log(data); 
    })
  }

  //change to http get (savedProducts db)
  getSavedData(email:string): Observable<any> {  
    let request =
    this.HttpClient.post(this.baseURL + `getproducts`,
    {
      "email": email,
    });
  return request;
  }

//   /**
//  * Handle Http operation that failed.
//  * Let the app continue.
//  *
//  * @param operation - name of the operation that failed
//  * @param result - optional value to return as the observable result
//  */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
