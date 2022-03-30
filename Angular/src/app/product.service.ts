import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductClass } from './product-class.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url: string = "/assets/mock_data/products.json"; //replace url for flask
  private _someURL: string = ""; //replace url for flask
  constructor(private http: HttpClient) { }

  //http post into savedProducts db
  saveProduct(product:ProductClass, email:string): Observable<ProductClass> {
    return this.http.post<ProductClass>(this._someURL,product);
  }


  //call backend w/ http get for product results from filters
  getProducts(): Observable<ProductClass[]> {  
    return this.http.get<ProductClass[]>(this._url); 
  }
}
