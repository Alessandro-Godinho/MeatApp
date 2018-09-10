import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../restaurants/restaurants.service'
import { Restaurant } from '../restaurants/restaurant/restaurant.model';


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',

})
export class RestaurantDetailComponent implements OnInit {
 rowState = 'ready'
  restaurant: Restaurant;
  constructor(private restService: RestaurantsService, private rota: ActivatedRoute) { }

  ngOnInit() {
    this.restService.restaurantById(this.rota.snapshot.params['id']).subscribe(resta => this.restaurant = resta)
  }

}


