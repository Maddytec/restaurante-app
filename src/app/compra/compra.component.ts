import { CompraService } from './compra.service';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/compartilhada/radio/radio-option.model';
import { Carrinho } from 'app/restaurante-detalhe/carrinho/carrinho.model';
import { Pedido, ItemPedido } from './compra.model';

@Component({
  selector: 'mt-compra',
  templateUrl: './compra.component.html'
})
export class CompraComponent implements OnInit {

  frete: number = 8;

  opcoesPagamento: RadioOption[] = [
    { label: 'Dinheiro', valor: 'DINHEIRO' },
    { label: 'Cartão de Crédito', valor: 'CARTAO_CREDITO' },
    { label: 'Cartão de Débito', valor: 'CARTAO_DEBITO' }
  ];
  constructor(private compraService: CompraService) { }

  ngOnInit() {
  }

  valorItens(): number {
    return this.compraService.valorItens();
  }

  itens(): Carrinho[] {
    return this.compraService.carrinho();
  }


  adicionarQuantidadeItem(item: Carrinho) {
    this.compraService.adicionarQuantidadeItem(item);
  }

  subtrairQuantidadeItem(item: Carrinho) {
    this.compraService.subtrairQuantidadeItem(item);
  }

  excluir(item: Carrinho) {
    this.compraService.excluir(item);
  }

  verificaPedido(pedido: Pedido){
    pedido.itensCompra = this.itens().map((item: Carrinho) => new ItemPedido(item.quantidade, item.item.id));
      this.compraService.verificaPedido(pedido)
      .subscribe((orderId: string ) => { 
        console.log(`Compra concluída: ${orderId}`) ;
        this.compraService.limpar();
      });
      console.log(pedido);
    }

}
