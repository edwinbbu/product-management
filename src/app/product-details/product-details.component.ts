import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Details';
  product: IProduct;
  errorMessage;
  constructor(private route: ActivatedRoute, private router: Router, private productservice: ProductsService) {
   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    if(id){
      this.productservice.getProduct(id).subscribe(
        product => {
          this.product = product;
        },
        error => {
          this.errorMessage = <any>error;
        }
      );
    }

  }
  onBack() {
    this.router.navigate(['/products']);
  }
}
