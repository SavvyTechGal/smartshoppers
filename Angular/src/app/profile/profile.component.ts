import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Chart } from 'chart.js';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../user.service';


@Component({ //need to actually display the users
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private profileJson: string = '';

  public userEmail: string = '';  

  public users : any = []; //had to add any type

  newUser: any;

  //savedProducts: ProductClass = [];

  constructor(
    private _profileService: ProfileService, 
    public auth: AuthService,
    public userService: UserService) 
    { }

  setNewUser(state: boolean) {
    this.newUser = !state;
    console.log(!state);
  }

  //check if user email exists in table
  //determines if user needs to edit account details
  isNewUser(email: string): void {
    
    console.log("isNewUser()------------------");
    console.log(this.newUser);
    const returnedUser = this.userService.getUser(this.userEmail); //need to subscribe result from backend
    returnedUser.displayUser();
    if(true) {   //returnedUser is empty
      console.log("yes new user--> display account details");
      this.newUser=true; //set newUser 
    }
    else {      //not a new user
      console.log("NOT a new user, --> display profile");
      this.getUserData(this.userEmail); //returnedUser is user object, still needed saved product info
      
    }
  }

  getUserData(email: string) {
    this.userService.getSavedData(email); //returns array of products
    //.subscribe
    // (data) => savedProducts = data
  }

  

  ngOnInit(): void { //remove void

    this.auth.user$.subscribe(
       (profile) => {
         this.profileJson = JSON.stringify(profile);
         this.userEmail = profile?.email as string;  //saving email to variable
         console.log(this.userEmail);
         this.isNewUser(this.userEmail);  //check if new user
        }
    )
    
    
    


    //this._profileService.getUsers() //returns an observable 
     //   .subscribe(data => this.users = data); //assign the data that arrives to users array
  }

}
