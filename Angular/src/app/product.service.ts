import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

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

  saveProduct(product:Product): void {
    console.log(product);
  }

  getProducts(): Observable<Product[]> {
    
    return this.http.get<Product[]>(this._url); 
  }
}
