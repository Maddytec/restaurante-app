import { Restaurante } from './restaurante.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html'
})
export class RestauranteComponent implements OnInit {

@Input() restaurante: Restaurante;

  constructor() { }

  ngOnInit() {
  }

}
