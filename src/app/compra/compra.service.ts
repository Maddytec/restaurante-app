import { MEAT_API } from './../app.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarrinhoService } from './../restaurante-detalhe/carrinho/carrinho.service';
import { Injectable } from '@angular/core';
import { Carrinho } from 'app/restaurante-detalhe/carrinho/carrinho.model';
import { Pedido } from './compra.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CompraService {

    valorItens(): Number {
    return this.carrinhoService.total();
  }

    constructor(private carrinhoService: CarrinhoService,
                private http: HttpClient) { }

    carrinho(): Carrinho[] {
        return this.carrinhoService.itens;
    }

    adicionarQuantidadeItem(item: Carrinho) {
        this.carrinhoService.adicionarQuantidadeItem(item);
    }

    subtrairQuantidadeItem(item: Carrinho) {
        this.carrinhoService.subtrairQuantidadeItem(item);
    }

    excluir(item: Carrinho) {
        this.carrinhoService.removeItem(item);
    }

    limpar() {
      this.carrinhoService.limpar();
    }

    verificaPedido(pedido: Pedido): Observable<String> {
       return this.http.post<Pedido>(`${MEAT_API}/orders`, pedido)
        .pipe(
            map( orders => pedido.pedidoId )
            )
    }
}
