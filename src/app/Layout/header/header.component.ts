import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  query : string = "";

  @Output()
  queryEmmiter : EventEmitter<string> = new EventEmitter<string>();

  changeInput(input:HTMLInputElement){
    this.query = input.value;
    this.queryEmmiter.emit(this.query);
  }
}
