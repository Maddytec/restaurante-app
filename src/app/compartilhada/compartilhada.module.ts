import { NotificationService } from './messages/notification.service';
import { CarrinhoService } from './../restaurante-detalhe/carrinho/carrinho.service';
import { LoggedInGuard } from './../security/loggedin.guard';
import { LoginService } from './../security/login/login.service';
import { RanqueComponent } from './ranque/ranque.component';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RadioComponent } from './radio/radio.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantesService } from 'app/restaurantes/restaurantes.service';
import { CompraService } from 'app/compra/compra.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RanqueComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    SnackbarComponent,
    RanqueComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        CarrinhoService,
        RestaurantesService,
        CompraService,
        NotificationService,
        LoginService,
        LoggedInGuard]
    }
  }
}
