import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _url: string = "/assets/mock_data/users.json";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    // return [
    //   {"name": "Amy", "age": 21},
    //   {"name": "Sandy", "age": 22}
    // ];
    return this.http.get<IUser[]>(this._url); //this url can be replaced to read from a server
  }
}
