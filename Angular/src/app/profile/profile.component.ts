import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Chart } from 'chart.js';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../user.service';
import { ProductClass } from '../product-class.model';
import { UserClass } from '../user-class.model';


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

  savedProducts: ProductClass[] = [];  

  returnedUser = new UserClass("","","","");

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
    
    this.userService.getUser(this.userEmail); //should return observable later
    
    if(true) {   //returnedUser is empty
      console.log("yes new user--> display account details");     //testing
      this.newUser=true; //set newUser 
    }
    else {      //not a new user
      console.log("NOT a new user, --> display profile");         //testing
      this.getUserData(this.userEmail); //returnedUser is user object, still needed saved product info
      
    }
  }

  //retrieve user saved products
  getUserData(email: string) {
    this.userService.getSavedData(email); 
    //.subscribe
    // (data) => savedProducts = data
  }

  

  ngOnInit(): void { //remove void

    this.auth.user$.subscribe(
       (profile) => {
         this.profileJson = JSON.stringify(profile);
         this.userEmail = profile?.email as string;  //saving email to variable
         this.isNewUser(this.userEmail);  //check if new user
        }
    )
    
    
    


    //this._profileService.getUsers() //returns an observable 
     //   .subscribe(data => this.users = data); //assign the data that arrives to users array
  }

}
