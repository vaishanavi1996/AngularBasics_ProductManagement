import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    private _listFilter: string = '';

    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      console.log('In Setter:' , value);
      this.filteredProducts = this.performFilter(value);
    }

    constructor(private productService: ProductService){}

    filteredProducts: IProduct[] = [];

    products: IProduct[] = [];

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().includes(filterBy));
    }
    toggleImage(): void{
      this.showImage = !this.showImage;
    }
    ngOnInit(): void{
        this.productService.getProduct().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
    }
    OnRatingClicked(message: string): void{
      this.pageTitle = 'Product List:' + message;
    }
}
