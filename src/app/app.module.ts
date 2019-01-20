import { CompraService } from './compra/compra.service';
import { RestaurantesService } from './restaurantes/restaurantes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ROUTES } from './app.routes';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from './restaurante-detalhe/menu/menu.component';
import { CarrinhoComponent } from './restaurante-detalhe/carrinho/carrinho.component';
import { ItemComponent } from './restaurante-detalhe/item/item.component';
import { AvaliacaoComponent } from './restaurante-detalhe/avaliacao/avaliacao.component';
import { CarrinhoService } from './restaurante-detalhe/carrinho/carrinho.service';
import { CompraComponent } from './compra/compra.component';
import { InputComponent } from './compartilhada/input/input.component';
import { RadioComponent } from './compartilhada/radio/radio.component';
import { ItemCompraComponent } from './compra/item-compra/item-compra.component';
import { FreteComponent } from './compra/frete/frete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetalheComponent,
    MenuComponent,
    CarrinhoComponent,
    ItemComponent,
    AvaliacaoComponent,
    CompraComponent,
    InputComponent,
    RadioComponent,
    ItemCompraComponent,
    FreteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantesService, CarrinhoService, CompraService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
