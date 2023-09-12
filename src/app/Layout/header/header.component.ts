import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  query : string = "";
  productId!:number;

  @Output()
  queryEmmiter : EventEmitter<string> = new EventEmitter<string>();

  constructor(private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.productId = parseInt(this.route.snapshot.paramMap.get("id") || '-1');
  }

  changeInput(input:HTMLInputElement){

    if(this.productId == -1){
      this.query = input.value;
      console.log(this.query);
      this.queryEmmiter.emit(this.query);
    }
    else{
      this.query = input.value;
      console.log(this.query);
      this.queryEmmiter.emit(this.query);
      this.router.navigate(['',this.query]);

    }
   
  }
}
