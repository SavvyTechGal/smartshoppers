import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductClass } from './product-class.model';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private _url: string = "/assets/mock_data/products.json"; //replace url for flask
  private baseURL = `https://smartshoppersflaskv2.us-east-1.elasticbeanstalk.com/`
  
  constructor(private HttpClient: HttpClient) { }

  //http post into savedProducts db
  saveProduct(product:ProductClass, email:string) { //: Observable<ProductClass>
    console.log(`saveProduct`);
    console.log(`email: ${email} product: ${product.title}`);
    // console.log("saveProduct");
    // let request =
    // this.HttpClient.post(this.baseURL + `...`,
    // {
    //   "email": email,
    //   "product": product.title
      
    // });
    // request.subscribe((data) => {
    //   console.log(data); });
  };

  removeProduct(product: ProductClass, email: string) { //: Observable<any> 
    console.log('remove saved product');
    //console.log(`email: ${email} product: ${product.title}`);
    // let request =
    // this.HttpClient.delete(this.baseURL + "...",
    // {
    //   "email": email,
    //   "product": product.title
    // });
    // return request;
  }
  


  //call backend w/ http get for product results from filters
  getProducts(email: string): Observable<any> {  
    // return this.http.get<ProductClass[]>(this._url); 
    let request =
    this.HttpClient.post(this.baseURL + `getproducts`,
    {
      "email": email,
    });
    return request;
  }
}
