import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-cost',
  templateUrl: './delivery-cost.component.html'
})
export class DeliveryCostComponent implements OnInit {
  @Input() frete: number;
  @Input() totalItens: number;
  constructor() { }

  ngOnInit() {
  }
  total(): number{
    return this.frete + this.totalItens;
  }
}
