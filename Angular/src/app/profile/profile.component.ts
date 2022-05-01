import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../user.service';
import { ProductClass } from '../product-class.model';
import { UserClass } from '../user-class.model';
import { PageEvent } from '@angular/material/paginator';
import { ProductService } from '../product.service';



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
  returnedUser: any;  //user from db
  profileLoadedIn: boolean = false;
  loadedIn: boolean = false;
  hasSavedProducts: boolean = true;
  public currentSort = '';
  public pageSlice: ProductClass[] = [];
  public currentStartIndex = 0;
  public currentEndIndex = 5;
  public lowSorted: ProductClass[] =[]; //set when user chooses low to high
  public highSorted: ProductClass[] = [];  //set when user chooses high to low

  OnPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.savedProducts.length) {
      endIndex = this.savedProducts.length;
    }
    //console.log(`startIndex: ${startIndex} and endIndex: ${endIndex}`);
    this.currentStartIndex = startIndex;
    this.currentEndIndex = endIndex;
    this.pageSlice = this.savedProducts.slice(startIndex, endIndex);
  }

  onSubmit(sortForm: { value: any; }) {  //sorting form
    let sort = sortForm.value.sortSel;
    console.log(`chose: ${sort}`);
    
    if(sort == 'Price: Low to High') {
      console.log('2');
      if(this.lowSorted.length == 0) {  //not sorted yet
        this.lowSorted = [...this.savedProducts];
        this.lowSorted.sort(function(a,b) {
          let priceA = (a.price).toString().substring(1);  //remove '$'
          let priceB = (b.price).toString().substring(1);  //remove '$'
          priceA = priceA.replace(/,/g,'');  //remove ','
          priceB = priceB.replace(/,/g,'');  //remove ','
          return parseFloat(priceA) - parseFloat(priceB);
        });
        this.savedProducts = [...this.lowSorted];
        this.pageSlice = this.savedProducts.slice(this.currentStartIndex, this.currentEndIndex);
      }
      else {   //no need to run algo again if ran before
        this.savedProducts = [...this.lowSorted];
        this.pageSlice = this.savedProducts.slice(this.currentStartIndex, this.currentEndIndex);
      }

    }
    else if(sort == 'Price: High to Low') {
      console.log('3');
      if(this.highSorted.length == 0) {  //not sorted yet
        this.highSorted = [...this.savedProducts];
        this.highSorted.sort(function(a,b) {
          let priceA = (a.price).toString().substring(1);  //remove '$'
          let priceB = (b.price).toString().substring(1);  //remove '$'
          priceA = priceA.replace(/,/g,'');  //remove ','
          priceB = priceB.replace(/,/g,'');  //remove ','
          return parseFloat(priceB) - parseFloat(priceA);
        });
        this.savedProducts = [...this.highSorted];
        this.pageSlice = this.savedProducts.slice(this.currentStartIndex, this.currentEndIndex);
      }
      else {   //no need to run algo again if ran before
        this.savedProducts = [...this.highSorted];
        this.pageSlice = this.savedProducts.slice(this.currentStartIndex, this.currentEndIndex);
      }
    }
    else {
      console.log('error');
    }
    
  }

    
  modalProduct: ProductClass = {
    title: '',
    price: -1,
    thumbnail: '',
    source: '',
    rating: -1,
    link: '#',
    extensions: []
  }

  handleModal(product: ProductClass): void {
    this.modalProduct=product;
    //console.log(this.modalProduct)
  }

  constructor(
    private _productService: ProductService,
    public auth: AuthService,
    public userService: UserService) 
    { }
  
  updateSavedList(change:boolean) {
    this.hasSavedProducts = change;
  }
  removeProduct(product: ProductClass): void {
    console.log(`remove product: ${product.title}`);
    this._productService.removeProduct(product,this.userEmail);
     // .subscribe(data => {
      //   console.log(data);
      // });
      // console.log(product);
    const updated = this.savedProducts.filter(item => item !== product);
    this.pageSlice = this.pageSlice.filter(item => item !== product);
    this.savedProducts = updated;
    if(this.savedProducts.length == 0) {
      this.hasSavedProducts = false;
    }
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
      //this.isSignedIn = true;
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
        // if(data.length > 20) {   //filter returns more than 5 products
        //   for(let i = 0; i < 20; i++) {
        //     const newProduct = new ProductClass(data[i].title, data[i].price, 
        //       data[i].thumbnail, data[i].source, data[i].rating, data[i].link, data[i].extensions);
        //     //console.log(newProduct);
        //     this.savedProducts.push(newProduct);
        //   }
        // } else {      //5 or less products
          for(let i = 0; i < data.length; i++) {
            const newProduct = new ProductClass(data[i].title, data[i].price, 
              data[i].thumbnail, data[i].source, data[i].rating, data[i].link, data[i].extensions);
            //console.log(newProduct);
            this.savedProducts.push(newProduct);
          }
        //}
      }
      this.pageSlice =this.savedProducts.slice(0,5);
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
