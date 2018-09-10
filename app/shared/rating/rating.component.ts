import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>()
  rates: number [] = [1,2,3,4,5];
  rate: number = 0;
  previousRate: number = 0;

  constructor() { }

  ngOnInit() {
  }
  setRates(r){
    this.rate = r;
    this.previousRate = undefined;
    this.rated.emit(this.rate)
  }
  onMouseEnter(r){
   if(this.previousRate === undefined)
   {
     this.previousRate = this.rate;
   }
   this.rate = r;
  }
  onMouseLeave()
  {
    this.previousRate = this.rate;
    

  }

}
