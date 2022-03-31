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

  returnedUser: any;

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
  getUser(email: string): void {

    let fname:any;
    let lname:any;
    let role:any;
    let newEmail:any;
    this.userService.getUser(this.userEmail)
    .subscribe((data) => {
      console.log("subscribe data:");
      console.log(data);
      newEmail = Object.values(data)[0];
      fname = Object.values(data)[1];
      lname = Object.values(data)[2];
      role = Object.values(data)[3];
      this.returnedUser = new UserClass(fname,lname,role,newEmail);  //create user model + set to returnedUser
      console.log(this.returnedUser);   

      // if(false) {   //returnedUser is empty
      //   console.log("yes new user--> display account details");     //testing
      //   this.newUser=true; //set newUser 
      // }
      // else {      //not a new user
      //   console.log("NOT a new user, --> display profile");         //testing
      //   //this.getUserData(this.userEmail); //returnedUser is user object, still needed saved product info
        
      // }
      
    });
    
    
    

    
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
         console.log("ngoninit profile");
         console.log(this.userEmail);
         this.getUser(this.userEmail);  //check if new user
        }
    )
    
    
    


    //this._profileService.getUsers() //returns an observable 
     //   .subscribe(data => this.users = data); //assign the data that arrives to users array
  }

}
