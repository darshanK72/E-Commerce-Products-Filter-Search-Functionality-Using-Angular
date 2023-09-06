import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent {


  choiceCategory = 'all';


  @Output()
  changedEvent:EventEmitter<string> = new EventEmitter<string>();


  onChangeCategory(){
    console.log(this.choiceCategory);
    this.changedEvent.emit(this.choiceCategory);
  }

}
