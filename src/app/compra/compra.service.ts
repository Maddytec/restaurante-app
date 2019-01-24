import { MEAT_API } from './../app.api';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CarrinhoService } from './../restaurante-detalhe/carrinho/carrinho.service';
import { Injectable } from '@angular/core';
import { Carrinho } from 'app/restaurante-detalhe/carrinho/carrinho.model';
import { Pedido } from './compra.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompraService {
  
    valorItens(): number {
    return this.carrinhoService.total();
  }

    constructor(private carrinhoService: CarrinhoService, private http: Http) { }

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

    limpar(){
      this.carrinhoService.limpar();
    }

    verificaPedido(pedido: Pedido): Observable<String>{
        const headers = new Headers();
        headers.append('Content-Type', 'application/json' )
        return this.http.post(`${MEAT_API}/orders`, 
                                JSON.stringify(pedido),
                                new RequestOptions({headers: headers}))
                                .map(response => response.json())
                                .map( pedido => pedido.id);
    }

}