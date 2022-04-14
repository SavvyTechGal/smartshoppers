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

  userEmail: string = '';  

  newUser: boolean = false;  //if user is registered in db

  savedProducts: ProductClass[] = [];  

  //isSavedPage: boolean = true;

  returnedUser: any;  //user from db

  profileLoadedIn: boolean = false;

  loadedIn: boolean = false;

  isSignedIn: boolean = false;

  hasSavedProducts: boolean = true;

  constructor(
    public auth: AuthService,
    public userService: UserService) 
    { }
  
    updateSavedList(change:boolean) {
      this.hasSavedProducts = change;
    }


  //check if user email exists in table
  //determines if user needs to edit account details
  getUser(email: string): void {

    let fname:any;
    let lname:any;
    let role:any;
    let newEmail:any;
    console.log(email);
    this.userService.getUser(this.userEmail)
    .subscribe((data) => {
      //console.log("subscribe--getUser");
      //console.log(data);
      if(data == null) {
        console.log("data is null");  //if user not found in db -> not registered yet -> direct to signupform
        this.newUser = true;
      }
      else {    //if user returned --> load profile + saved
      newEmail = Object.values(data)[0];
      fname = Object.values(data)[1];
      lname = Object.values(data)[2];
      role = Object.values(data)[3];
      this.returnedUser = new UserClass(fname,lname,role,newEmail);  //create user model + set to returnedUser
      console.log(this.returnedUser);   
      this.profileLoadedIn = true;
      this.isSignedIn = true;
      this.getUserData(this.userEmail);
      }
      
    });
    
  }

  //retrieve user saved products
  getUserData(email: string) {
    this.userService.getSavedData(email)
    .subscribe(data => {
      if(data == null) {  //user has no saved products
        this.hasSavedProducts = false;
      }
      else {
        console.log(data.length);
        if(data.length > 5) {   //filter returns more than 5 products
          for(let i = 0; i < 5; i++) {
            const newProduct = new ProductClass(data[i].title, data[i].price, 
              data[i].thumbnail, data[i].source, data[i].rating, data[i].link, data[i].extensions);
            //console.log(newProduct);
            this.savedProducts.push(newProduct);
          }
        } else {      //5 or less products
          for(let i = 0; i < data.length; i++) {
            const newProduct = new ProductClass(data[i].title, data[i].price, 
              data[i].thumbnail, data[i].source, data[i].rating, data[i].link, data[i].extensions);
            //console.log(newProduct);
            this.savedProducts.push(newProduct);
          }
        }
      }

      this.loadedIn = true;   //requests are finished loading --> ready to display
      //console.log(this.products);
      
    });
    
  }

  

  ngOnInit(): void { //remove void

    this.auth.user$.subscribe(
       (profile) => {
         this.profileJson = JSON.stringify(profile);
         this.userEmail = profile?.email as string;  //saving email to variable
         console.log(this.userEmail);
         this.getUser(this.userEmail);  
        }
    )
  }

}
