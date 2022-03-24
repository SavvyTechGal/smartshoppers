import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../sample-products';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  modalProduct: Product = {
    name :'',
    brand:'',
    price:-1,
    image:''
  }

  constructor(private _productService: ProductService) { }

  handleModal(product: Product): void {
    this.modalProduct=product;
    //console.log(this.modalProduct)
  }

  saveProduct(product: Product): void {
    this._productService.saveProduct(product);
  //  .subscribe(data => console.log(data));
  }

  ngOnInit(): void {
    this._productService.getProducts() 
    .subscribe(data => {
      this.products = data;
      console.log(data);
    }); 
}

}
