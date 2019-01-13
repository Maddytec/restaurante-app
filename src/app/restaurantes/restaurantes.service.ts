import { ErrorHandler } from './../app.errror-handler';
import { Http } from '@angular/http';
import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Restaurante } from './restaurante/restaurante.model';
import { Item } from 'app/restaurante-detalhe/item/item-model';

@Injectable()
export class RestaurantesService {

  constructor(private http: Http) { }

  restaurantes(): Observable<Restaurante[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.error);
  };

  restaurantesById(id: string): Observable<Restaurante> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.error);
  }

  avaliacaoRestaurante(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.error);
  }

  menuRestaurante(id: string): Observable<Item[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.error);
  }

}