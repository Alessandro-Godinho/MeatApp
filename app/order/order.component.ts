import { Component, OnInit } from '@angular/core';
import { RadioOptions } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/shopping-cart.model';
import { Order, OrderItem } from './order.model';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';



@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  orderform: FormGroup;
  frete: number = 8;
  patternNumber = /^[0-9]*$/;

opcaoPagamento: RadioOptions[] = [
  {label: 'Dinheiro', valor: 'DIN'},
  {label: 'Cartão de Débito', valor: 'DEB'},
  {label: 'Cartão de Crédito', valor: 'CRE'}
]
  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderform = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.email, Validators.required]),
      emailConfirmation: this.formBuilder.control('', [Validators.email, Validators.required]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.patternNumber)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.emailConfirmation})
  }
  static emailConfirmation(group: AbstractControl): {[chave:string]: boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value)
    {
      return {emailNaoCombina: true}
    }
  }
  itemsCarrinho(): CartItem[]{
    return this.orderService.cartItem();
  }
  aumentarQuantidade(item: CartItem){
    return this.orderService.increaseQtd(item)
  }
  diminuirQuantidade(item: CartItem){
    return this.orderService.decreaseQtd(item)
  }
  excluirItem(item: CartItem){
    return this.orderService.remove(item)
  }
  valorTotal(): number{
    return this.orderService.total();
}
checkOrder(order: Order){
order.orderItem = this.itemsCarrinho().map((item: CartItem)=> new OrderItem(item.quantidade,item.menuItem.id))
this.orderService.checkOrder(order)
.subscribe((orderId: Order) => {
 // console.log(`compra efetuada ${order}`)
  this.router.navigate(['/order-summary'])
  this.orderService.clear()
})
}

}
