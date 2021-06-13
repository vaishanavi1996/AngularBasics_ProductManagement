import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  pageTitle: string = 'Product Details Page';
  constructor() { }

  ngOnInit(): void {
  }

}
