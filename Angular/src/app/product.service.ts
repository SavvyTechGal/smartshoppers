import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductClass } from './product-class.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url: string = "/assets/mock_data/products.json";
  //private _someURL: string = "";
  constructor(private http: HttpClient) { }

  
  //saveProduct(product: Product): Observable<Product> {
  //  const body = product;
  //  return this.http.post<Product>(this._someURL,body); 
  //}

  saveProduct(product:ProductClass): void {
    
  }

  getSavedProducts() {   //return ProductClass[]
    
  }

  getProducts(): Observable<ProductClass[]> {  //results from questionnaire
    
    return this.http.get<ProductClass[]>(this._url); 
  }
}
