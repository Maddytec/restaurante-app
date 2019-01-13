import { CarrinhoService } from './carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

  itens(): any[]{
    return this.carrinhoService.itens;
  }

  limpar(){
    this.carrinhoService.limpar();
  }

  removeItem(item: any){
    this.carrinhoService.removeItem(item);
  }

  addItem(item: any){
    this.carrinhoService.addItem(item);
  }

  total(): number {
    return this.carrinhoService.total();
  }

}
