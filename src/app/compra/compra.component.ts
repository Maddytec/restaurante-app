import { CompraService } from './compra.service';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/compartilhada/radio/radio-option.model';
import { Carrinho } from 'app/restaurante-detalhe/carrinho/carrinho.model';
import { Pedido, ItemPedido } from './compra.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EMAIL_VALIDATOR, EmailValidator } from '@angular/forms/src/directives/validators';

@Component({
  selector: 'mt-compra',
  templateUrl: './compra.component.html'
})
export class CompraComponent implements OnInit {

  emailPattern = /^[\w!#$%&’*+/=\-?^_`{|}~]+(\.[\w!#$%&’*+/=\-?^_`{|}~]+)*@[\w-]+(\.[\w]+)*(\.[a-z]{2,})$/;

  numberPattern = /^[0-9]*$/;

  pedidoForm: FormGroup;

  frete: number = 8;

  opcoesPagamento: RadioOption[] = [
    { label: 'Dinheiro', valor: 'DINHEIRO' },
    { label: 'Cartão de Crédito', valor: 'CARTAO_CREDITO' },
    { label: 'Cartão de Débito', valor: 'CARTAO_DEBITO' }
  ];
  constructor(private compraService: CompraService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
   this.pedidoForm = this.formBuilder.group({
     name: this.formBuilder.control('', [ Validators.required, Validators.minLength(5)]),
     email: this.formBuilder.control('', [ Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
     emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
     address: this.formBuilder.control('', [ Validators.required, Validators.minLength(5)]),
     number: this.formBuilder.control('', [ Validators.required, Validators.minLength(1), Validators.pattern(this.numberPattern)]),
     optionlAddress: this.formBuilder.control(''),
     paymentOption: this.formBuilder.control('', Validators.required )
   });
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

  verificaPedido(pedido: Pedido) {
    pedido.itensCompra = this.itens().map((item: Carrinho) => new ItemPedido(item.quantidade, item.item.id));
    this.compraService.verificaPedido(pedido)
      .subscribe((orderId: string) => {
        this.router.navigate(['/resultado']);
        this.compraService.limpar();
      });
    console.log(pedido);
  }

}
