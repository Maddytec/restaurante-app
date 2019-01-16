import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/compartilhada/radio/radio-option.model';

@Component({
  selector: 'mt-compra',
  templateUrl: './compra.component.html'
})
export class CompraComponent implements OnInit {

  opcoesPagamento: RadioOption[] = [
    { label: 'Dinheiro', valor: 'DINHEIRO' },
    { label: 'Cartão de Crédito', valor: 'CARTAO_CREDITO'},
    { label: 'Cartão de Débito', valor: 'CARTAO_DEBITO'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
