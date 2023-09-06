import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import * as productData from '../../../assets/product.json';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  @Input()
  category!: string;

  temp: any;
  allProducts: any[] = [];
  newAllPro: any[] = [];
  query: string = '';

  ngOnInit(): void {
    this.productService.getJsonData().subscribe((data) => {
      this.temp = data;
      console.log(this.temp);
      this.temp.forEach((p: any) => {
        this.allProducts.push(p);
      });
    });
  }

  changeInput(event: any) {
    let keyword = event.target.value;
    this.allProducts = [];

    this.productService.getJsonData().subscribe((data) => {
      this.temp = data;
      this.temp.forEach((p: any) => {
        if(p.name.substring(keyword)){
          this.allProducts.push(p);
        }
      });
    });

    console.log(this.allProducts);
    console.log(keyword);


  }

  onCatgChange(value: string) {
    this.category = value;
    console.log(this.category);
    this.allProducts = [];
    if (this.category != 'all') {
      this.productService.getJsonData().subscribe((data) => {
        this.temp = data;
        this.temp.forEach((p: any) => {
          if (p.category == this.category) {
            this.allProducts.push(p);
          }
        });
      });
    } else {
      this.productService.getJsonData().subscribe((data) => {
        this.temp = data;
        this.temp.forEach((p: any) => {
          this.allProducts.push(p);
        });
      });
    }
  }
}
