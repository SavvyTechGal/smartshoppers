import { Component, OnInit } from '@angular/core';
import { ProductClass } from '../product-class.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductClass[] = [];

  modalProduct: ProductClass = {
    name: '',
    price: -1,
    image: ''
  }

  constructor(private _productService: ProductService) { }

  handleModal(product: ProductClass): void {
    this.modalProduct=product;
    //console.log(this.modalProduct)
  }

  //save product to user's saved data
  saveProduct(product: ProductClass): void {
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
