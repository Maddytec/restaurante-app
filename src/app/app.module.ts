import { AplicationErrorHandler } from './app.errror-handler';
import { SharedModule } from './compartilhada/compartilhada.module';
import { LoginService } from './security/login/login.service';
import { CompraService } from './compra/compra.service';
import { RestaurantesService } from './restaurantes/restaurantes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import locatePt from '@angular/common/locales/pt';

registerLocaleData(locatePt, 'pt');

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from './restaurante-detalhe/menu/menu.component';
import { CarrinhoComponent } from './restaurante-detalhe/carrinho/carrinho.component';
import { ItemComponent } from './restaurante-detalhe/item/item.component';
import { AvaliacaoComponent } from './restaurante-detalhe/avaliacao/avaliacao.component';
import { CarrinhoService } from './restaurante-detalhe/carrinho/carrinho.service';
import { ResultadoComponent } from './compra/resultado/resultado.component';
import { LoginComponent } from './security/login/login.component';
import { NotificationService } from './compartilhada/messages/notification.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetalheComponent,
    MenuComponent,
    CarrinhoComponent,
    ItemComponent,
    AvaliacaoComponent,
    ResultadoComponent,
    LoginComponent,
    NotFoundComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [RestaurantesService, LoginService, CarrinhoService, NotificationService, CompraService,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: ErrorHandler, useClass: AplicationErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
