import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations'

import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html',
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-30px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(10px)', offset: 0.8}),
        style({opacity: 1, transform: 'translateX(0px)', offset: 1})
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity: 1, transform: 'translateX(0px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2}),
        style({opacity: 0, transform: 'translateX(30px)', offset: 1})
      ])))
    ])
  ]
})
export class CarrinhoComponent implements OnInit {

  rowState = 'ready';

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

  itens(): any[] {
    return this.carrinhoService.itens;
  }

  limpar() {
    this.carrinhoService.limpar();
  }

  removeItem(item: any) {
    this.carrinhoService.removeItem(item);
  }

  addItem(item: any) {
    this.carrinhoService.addItem(item);
  }

  total(): number {
    return this.carrinhoService.total();
  }

}
