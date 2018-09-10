import { CartItem } from './shopping-cart.model';
import { MenuItem } from '../menu-item/menu-item.model';
import { NotificationService } from '../../shared/messages/notification.service';
import { Injectable } from '../../../../node_modules/@angular/core';

@Injectable()

export class ShoppingCartService{

  constructor(private notificationService: NotificationService){}

    // tslint:disable-next-line:member-ordering
    items: CartItem[] = [];
    clear(){
        this.items = []
    }
    addItem(item: MenuItem){
        let found = this.items.find((mItem)=> mItem.menuItem.id === item.id)
        if(found){
            this.increaseQtd(found)
        }
        // tslint:disable-next-line:one-line
        else{
            this.items.push(new CartItem(item));
        }
        this.notificationService.notify(`Voce adicionou um ${item.name}`);
    }
    removeItem(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify(`Voce removeu um ${item.menuItem.name}`);
    }
    total(): number{
        return this.items.map(item => item.value()).reduce((valorAnterior, valorAtual)=>valorAnterior+valorAtual,0)
    }
    increaseQtd(item: CartItem){
         item.quantidade ++;
    }
    decreaseQtd(item: CartItem){
         item.quantidade --;
         if(item.quantidade === 0){
             this.removeItem(item)
         }

    }

}
