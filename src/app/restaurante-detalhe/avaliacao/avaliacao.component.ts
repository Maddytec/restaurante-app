import { ActivatedRoute } from '@angular/router';
import { RestaurantesService } from './../../restaurantes/restaurantes.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-avaliacao',
  templateUrl: './avaliacao.component.html'
})
export class AvaliacaoComponent implements OnInit {

  avaliacoes: Observable<any>;

  constructor(private restaurantesService: RestaurantesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.avaliacoes = this.restaurantesService
      .avaliacaoRestaurante(this.activatedRoute.parent.snapshot.params['id']);

  }

}
