import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import * as productData from '../../../assets/product.json';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  constructor(private productService: ProductService,private router:Router) {}

  @Input()
  category: string = 'all';
  
  temp: any;
  allProducts: any[] = [];
  newAllPro: any[] = [];

  @Input()
  query: string = '';

  ngOnInit(): void {
    this.productService.getJsonData().subscribe((data) => {
      this.temp = data;
      this.temp.forEach((p: any) => {
        this.allProducts.push(p);
      });
    });
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

  pdp(product:any){
    this.router.navigate(['detail',product.id + 1]);
  }
}
