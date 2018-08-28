import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: 'Product Details';
  product: IProduct;
  constructor() { }

  ngOnInit() {
  }

}
