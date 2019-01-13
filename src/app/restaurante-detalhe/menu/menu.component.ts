import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from 'app/restaurantes/restaurantes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Item } from '../item/item-model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<Item[]>;

  constructor(private restaurantesService: RestaurantesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantesService
      .menuRestaurante(this.activatedRoute.parent.snapshot.params['id']);

  }

  addItem(item: Item){
    console.log(item);
  }

}
