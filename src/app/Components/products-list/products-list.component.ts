import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import * as productData from '../../../assets/product.json';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit{

  constructor(private productService:ProductService){}

  products:any;
  searchQuery = '';

  ngOnInit(): void {
    console.log(productData);
    this.productService.getJsonData().subscribe(data => {
      this.products = data;
    })
    
  }
  

}
