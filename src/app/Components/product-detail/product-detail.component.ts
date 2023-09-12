import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {

  @ViewChild("mainImage")
  mainImg! : ElementRef;

  productId!: number;
  query: string = '';
  allProducts: Product[] = [];
  temp: any;
  product!: Product;
  haveHighlights:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id') || '');

    this.productService.getJsonData().subscribe((data) => {
      this.temp = data;
      this.temp.forEach((p: any) => {
        if(p.id == this.productId - 1){
          this.product = p;

          if(this.product.data.highlights.length > 0){
            this.haveHighlights = true;
          }
          console.log(this.product);
        }        
      });
    });

    console.log(this.mainImg);
  }

  queryChange(value: any) {
    this.query = value;
    console.log(this.query);
  }

  changeImage(link:string,mainImage:HTMLDivElement){
    let im = mainImage.firstElementChild;
    im?.setAttribute("src",link);
  }


}
