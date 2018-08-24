import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageNumber = 2;
  showImage = true;
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {
   }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.filteredProducts = this.products;
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Product List: ' + message;
  }
}
