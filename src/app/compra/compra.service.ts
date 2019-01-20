import { CarrinhoService } from './../restaurante-detalhe/carrinho/carrinho.service';
import { Injectable } from '@angular/core';
import { Carrinho } from 'app/restaurante-detalhe/carrinho/carrinho.model';

@Injectable()
export class CompraService {
  
    valorItens(): number {
    return this.carrinhoService.total();
  }

    constructor(private carrinhoService: CarrinhoService) { }

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

}