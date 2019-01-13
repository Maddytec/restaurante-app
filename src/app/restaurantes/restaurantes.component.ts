import { Restaurante } from './restaurante/restaurante.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from './restaurantes.service';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[];

  constructor(private restaurantesService: RestaurantesService) { }

  ngOnInit() {
    this.restaurantesService.restaurantes()
      .subscribe(restaurantes => this.restaurantes = restaurantes);
  }

}
