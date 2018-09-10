import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
menu: Observable<MenuItem[]>
  constructor(private restService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }
addmenuItem(item: MenuItem){
  console.log(item)
}
}
