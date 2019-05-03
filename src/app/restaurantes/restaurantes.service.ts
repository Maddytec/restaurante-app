import { HttpClient, HttpParams } from '@angular/common/http';
import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Restaurante } from './restaurante/restaurante.model';
import { Item } from 'app/restaurante-detalhe/item/item-model';

@Injectable()
export class RestaurantesService {

  constructor(private http: HttpClient) { }

  restaurantesSearch(search?: string): Observable<Restaurante[]> {
    let params: HttpParams = undefined;
    if (search) {
      params = new HttpParams().append('q', search);
    }
    return this.http.get<Restaurante[]>(`${MEAT_API}/restaurants`, { params: params });
  }

  restaurantes(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(`${MEAT_API}/restaurants`)
  };

  restaurantesById(id: string): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${MEAT_API}/restaurants/${id}`);
  }

  avaliacaoRestaurante(id: string): Observable<any> {
    return this.http.get<any>(`${MEAT_API}/restaurants/${id}/reviews`);
  }

  menuRestaurante(id: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }

}