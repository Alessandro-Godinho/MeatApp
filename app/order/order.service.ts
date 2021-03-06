import { Injectable } from "../../../node_modules/@angular/core";
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/shopping-cart.model';
import { Order, OrderItem } from "./order.model";
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { MEAT_API } from "../app.api";

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: Http){}

    cartItem(): CartItem[]{
        return this.cartService.items
    }
    increaseQtd(item: CartItem){
        this.cartService.increaseQtd(item)
    }
    decreaseQtd(item: CartItem){
        this.cartService.decreaseQtd(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }
    total(): number{
        return this.cartService.total();
    }
    checkOrder(order: Order): Observable<Order>{
        const headers = new Headers();
        headers.append('Content-type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order),
        new RequestOptions({headers: headers}))
        .map(response => response.json())
        .map(order => order.id)
        

    }
    clear(){
        this.cartService.clear()
    }
   

}