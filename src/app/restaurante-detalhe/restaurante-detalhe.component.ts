import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from 'app/restaurantes/restaurantes.service';
import { Restaurante } from 'app/restaurantes/restaurante/restaurante.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html'
})
export class RestauranteDetalheComponent implements OnInit {

  restaurante: Restaurante;

  constructor(private restaurantesService: RestaurantesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantesService.restaurantesById(this.route.snapshot.params['id'])
      .subscribe(restaurante => this.restaurante = restaurante);
  }

}
