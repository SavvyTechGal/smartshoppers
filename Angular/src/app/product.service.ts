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
  private baseURL = `http://127.0.0.1:5000/`
  
  constructor(private HttpClient: HttpClient) { }

  //http post into savedProducts db
  saveProduct(product:ProductClass, email:string) { //: Observable<ProductClass>
    //return this.http.post<ProductClass>(this._someURL,product);
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
