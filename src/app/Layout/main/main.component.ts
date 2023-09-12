import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  query:string = "";

  constructor(private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.query = this.route.snapshot.paramMap.get("query") || '';
  }


  queryChange(value:any){
    this.query = value;
    console.log(this.query);
    this.router.navigate(['',this.query]);
  }
}
