import { Component, OnInit, Input } from '@angular/core';
import { ProductClass } from '../product-class.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  @Input() items: ProductClass[] = [];
  @Input() userEmail: string = '';
  @Input() isSignedIn: boolean = false;
  @Input() isSavedPage: boolean = false;
  
 
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

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    //console.log(this.items);
    //console.log(this.isSignedIn);
    //console.log(this.userEmail);
  }

}
