import { Carrinho } from './../../restaurante-detalhe/carrinho/carrinho.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-item-compra',
  templateUrl: './item-compra.component.html'
})
export class ItemCompraComponent implements OnInit {

  @Input() itens: Carrinho[];

  @Output() adicionarQuantidadeItem = new EventEmitter<Carrinho>();
  @Output() subtrairQuantidadeItem = new EventEmitter<Carrinho>();
  @Output() excluir = new EventEmitter<Carrinho>();

  constructor() { }

  ngOnInit() {
  }

  emitAdicionarQuantidadeItem(item: Carrinho) {
    this.adicionarQuantidadeItem.emit(item);
  }

  emitSubtrairQuantidadeItem(item: Carrinho) {
    this.subtrairQuantidadeItem.emit(item);
  }

  emitExcluir(item: Carrinho) {
    this.excluir.emit(item);
  }

}
