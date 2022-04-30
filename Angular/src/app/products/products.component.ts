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

  isSignedIn: boolean = false;  //only registered users can save

  loadedIn: boolean = false;

  products: ProductClass[] = [];

  isSavedPage: boolean = false;

  public pageSlice: ProductClass[] = [];

  OnPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.products.length) {
      endIndex = this.products.length;
    }
    this.pageSlice = this.products.slice(startIndex, endIndex);
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

  //save product to user's saved data
  saveProduct(product: ProductClass): void {
    this._productService.saveProduct(product,this.userEmail);
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
        if(this.userEmail) {
          this.isSignedIn = true;
        }
        this._productService.getProducts(this.userEmail) //calling service to get data from json
        .subscribe(data => {
          //this.products = data;
          console.log(data.length);
          // if(data.length > 30) {   //filter returns more than 30 products
          //   for(let i = 0; i < 30; i++) {
          //     const newProduct = new ProductClass(data[i].title, data[i].price, 
          //       data[i].thumbnail, data[i].source, data[i].rating, data[i].link, data[i].extensions);
          //     //console.log(newProduct);
          //     this.products.push(newProduct);
          //   }
          // } else {      // less products
            for(let i = 0; i < data.length; i++) {
              const newProduct = new ProductClass(data[i].title, data[i].price, 
                data[i].thumbnail, data[i].source, data[i].rating, data[i].link, data[i].extensions);
              //console.log(newProduct);
              this.products.push(newProduct);
            }
          //}
          this.pageSlice =this.products.slice(0,5);
          this.loadedIn = true;   //requests are finished loading --> ready to display
          //console.log(this.products);
          
        }); 

       }
   )

 }

}
