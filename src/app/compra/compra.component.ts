import { CompraService } from './compra.service';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/compartilhada/radio/radio-option.model';
import { Carrinho } from 'app/restaurante-detalhe/carrinho/carrinho.model';
import { Pedido, ItemPedido } from './compra.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mt-compra',
  templateUrl: './compra.component.html'
})
export class CompraComponent implements OnInit {

  emailPattern = /^[\w!#$%&’*+/=\-?^_`{|}~]+(\.[\w!#$%&’*+/=\-?^_`{|}~]+)*@[\w-]+(\.[\w]+)*(\.[a-z]{2,})$/;

  numberPattern = /^[0-9]*$/;

  pedidoForm: FormGroup;

  frete: Number = 8;

  pedidoId: string;

  opcoesPagamento: RadioOption[] = [
    { label: 'Dinheiro', valor: 'DINHEIRO' },
    { label: 'Cartão de Crédito', valor: 'CARTAO_CREDITO' },
    { label: 'Cartão de Débito', valor: 'CARTAO_DEBITO' }
  ];

    constructor(private compraService: CompraService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pedidoForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
 emailConfirmation: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      address: new FormControl('', [Validators.required, Validators.minLength(5)]),
      number: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(this.numberPattern)]),
      optionlAddress: new FormControl(''),
      paymentOption: new FormControl('', Validators.required)
    }, { validators: [this.equalsTo] })
  }


equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if (!email || !emailConfirmation) {
      return undefined;
    }
    if (email.value !== emailConfirmation.value) {
      return { emailsNotMath: true };
    }
    return undefined;
  }

  valorItens(): Number {
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

  isCompraFinalizada(): boolean {
    return this.pedidoId !== undefined;
  }

  verificaPedido(pedido: Pedido) {
    pedido.itensCompra = this.itens().map((item: Carrinho) => new ItemPedido(item.quantidade.valueOf(), item.item.id));

    this.compraService.verificaPedido(pedido)
    .pipe(tap((pedidoId: string) => {
      this.pedidoId = pedidoId;
    }))
      .subscribe((pedidoId: string) => {
        this.router.navigate(['/resultado']);
        this.compraService.limpar();
      }
      )
  }

}
