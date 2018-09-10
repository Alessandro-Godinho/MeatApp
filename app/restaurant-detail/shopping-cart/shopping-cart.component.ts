import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('300 0 ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-30px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(10px)', offset: 0.8}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1})
      ]))),
      transition('ready => void', animate('300 0 ease-out', keyframes([
        style({opacity: 1, transform: 'translateX(0)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2}),
        style({opacity: 0, transform: 'translateX(30px)', offset: 1}),
    ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState = 'ready';
  constructor(private shopService: ShoppingCartService) { }

  ngOnInit() {
  }
  items(): any[]{
    return this.shopService.items
  }
  total(): number{
    return this.shopService.total()
  }
  clear(){
    this.shopService.clear()
  }
  removeItem(item: any){
    this.shopService.removeItem(item)
  }
  addItem(item: any){
    this.shopService.addItem(item)
  }
}
