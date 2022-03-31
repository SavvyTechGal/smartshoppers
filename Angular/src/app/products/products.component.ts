import { Component, OnInit } from '@angular/core';
import { ProductClass } from '../product-class.model';
import { ProductService } from '../product.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  userEmail:string='';

  isSignedIn: boolean = false;  //only registered users can save

  products: ProductClass[] = [];

  modalProduct: ProductClass = {
    title: '',
    price: -1,
    thumbnail: '',
    source: '',
    rating: -1,
    link: '#',
    extensions: []
  }

  constructor(private _productService: ProductService, public auth: AuthService) { }

  

  handleModal(product: ProductClass): void {
    this.modalProduct=product;
    console.log(this.modalProduct)
  }

  //save product to user's saved data
  saveProduct(product: ProductClass): void {
    // this._productService.saveProduct(product,this.userEmail)
    // .subscribe(data => {
    //   console.log(data);
    // });
    // console.log(product);
  }

  ngOnInit(): void {
    //check if user is signed in with authservice
    //set variable email to userEmail + isSignedIn = true
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
          if(data.length > 5) {   //filter returns more than 5 products
            for(let i = 0; i < 5; i++) {
              const newProduct = new ProductClass(data[i].title, data[i].price, 
                data[i].thumbnail, data[i].source, data[i].rating, data[i].link, data[i].extensions);
              //console.log(newProduct);
              this.products.push(newProduct);
            }
          } else {      //5 or less products
            for(let i = 0; i < data.length; i++) {
              const newProduct = new ProductClass(data[i].title, data[i].price, 
                data[i].thumbnail, data[i].source, data[i].rating, data[i].link, data[i].extensions);
              //console.log(newProduct);
              this.products.push(newProduct);
            }
          }
          
        }); 
        // console.log("getproducts");
        // console.log(this.userEmail);

       }
   )

    // this._productService.getProducts(this.userEmail) //calling service to get data from json
    // .subscribe(data => {
    //   //this.products = data;
    //   console.log(data);
    // }); 
    // console.log("getproducts");
    // console.log(this.userEmail);
}

}
