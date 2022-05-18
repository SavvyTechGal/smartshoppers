import { Component, OnInit } from '@angular/core';
import { ProductClass } from '../product-class.model';
import { ProductService } from '../product.service';
import { AuthService } from '@auth0/auth0-angular';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  userEmail:string='';
  loadedIn: boolean = false;
  products: ProductClass[] = [];
  public currentSort = 'Best Fit'
  public pageSlice: ProductClass[] = [];
  public currentStartIndex = 0;
  public currentEndIndex = 5;
  public bestFitSorted: ProductClass[] = [];  //set in ngoninit
  public lowSorted: ProductClass[] =[]; //set when user chooses low to high
  public highSorted: ProductClass[] = [];  //set when user chooses high to low
  public ratingSorted: ProductClass[] = []  //set when user chooses rating

  OnPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.products.length) {
      endIndex = this.products.length;
    }
    
    this.currentStartIndex = startIndex;
    this.currentEndIndex = endIndex;
    this.pageSlice = this.products.slice(startIndex, endIndex);
  }

  onSubmit(sortForm: { value: any; }) {  //sorting form
    let sort = sortForm.value.sortSel;
    console.log(`chose: ${sort}`);
    
    if(sort == 'Best Fit') {
      console.log('1');
      this.products = [...this.bestFitSorted];
      this.pageSlice = this.products.slice(this.currentStartIndex, this.currentEndIndex);
    }
    else if(sort == 'Price: Low to High') {
      console.log('2');
      if(this.lowSorted.length == 0) {  //not sorted yet
        this.lowSorted = [...this.products];
        this.lowSorted.sort(function(a,b) {
          let priceA = (a.price).toString().substring(1);  //remove '$'
          let priceB = (b.price).toString().substring(1);  //remove '$'
          priceA = priceA.replace(/,/g,'');  //remove ','
          priceB = priceB.replace(/,/g,'');  //remove ','
          return parseFloat(priceA) - parseFloat(priceB);
        });
        this.products = [...this.lowSorted];
        this.pageSlice = this.products.slice(this.currentStartIndex, this.currentEndIndex);
      }
      else {   //no need to run algo again if ran before
        this.products = [...this.lowSorted];
        this.pageSlice = this.products.slice(this.currentStartIndex, this.currentEndIndex);
      }

    }
    else if(sort == 'Price: High to Low') {
      console.log('3');
      if(this.highSorted.length == 0) {  //not sorted yet
        this.highSorted = [...this.products];
        this.highSorted.sort(function(a,b) {
          let priceA = (a.price).toString().substring(1);  //remove '$'
          let priceB = (b.price).toString().substring(1);  //remove '$'
          priceA = priceA.replace(/,/g,'');  //remove ','
          priceB = priceB.replace(/,/g,'');  //remove ','
          return parseFloat(priceB) - parseFloat(priceA);
        });
        this.products = [...this.highSorted];
        this.pageSlice = this.products.slice(this.currentStartIndex, this.currentEndIndex);
      }
      else {   //no need to run algo again if ran before
        this.products = [...this.highSorted];
        this.pageSlice = this.products.slice(this.currentStartIndex, this.currentEndIndex);
      }
    }
    else if(sort == 'High Rating') {
      console.log('4');
      if(this.ratingSorted.length == 0) {  //not sorted yet
        this.ratingSorted = [...this.products];
        this.ratingSorted.sort(function(a,b) {
          return b.rating-a.rating;
        });
        this.products = [...this.ratingSorted];
        this.pageSlice = this.products.slice(this.currentStartIndex, this.currentEndIndex); 
      }
      else {
        this.products = [...this.ratingSorted];
        this.pageSlice = this.products.slice(this.currentStartIndex, this.currentEndIndex); 
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

  }

  //save product to user's saved data
  saveProduct(product: ProductClass): void {
    this._productService.saveProduct(product,this.userEmail);
    console.log(product.rating);
    // .subscribe(data => {
    //   console.log(data);
    // });
    // console.log(product);
  }


  constructor(private _productService: ProductService, public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {  
        this.userEmail = profile?.email as string;  //saving email to variable
        this._productService.getProducts(this.userEmail) //calling service to get data from json
        .subscribe(data => {
          //this.products = data;
          console.log(data.length);
          for(let i = 0; i < data.length; i++) {
            const newProduct = new ProductClass(data[i].title, data[i].price, 
              data[i].thumbnail, data[i].source, data[i].rating, data[i].link, data[i].extensions);
            this.products.push(newProduct);
          }
          this.pageSlice =this.products.slice(0,5);
          this.loadedIn = true;   //requests are finished loading --> ready to display
          this.bestFitSorted = [...this.products];  //initial sorted
        }); 
       }
   )
 }
}
