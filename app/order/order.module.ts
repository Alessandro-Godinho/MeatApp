import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { DeliveryCostComponent } from './delivery-cost/delivery-cost.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

export const rotas: Routes = [
  {path: '', component: OrderComponent}
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(rotas)
  ],
  declarations: [OrderComponent, DeliveryCostComponent, OrderItemsComponent]
})
export class OrderModule { }
