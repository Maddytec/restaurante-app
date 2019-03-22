import { AboutModule } from './about/about.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoggedInGuard } from './security/loggedin.guard';
import { LoginComponent } from './security/login/login.component';
import { ResultadoComponent } from './compra/resultado/resultado.component';
import { CompraComponent } from './compra/compra.component';
import { AvaliacaoComponent } from './restaurante-detalhe/avaliacao/avaliacao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes, CanActivate } from '@angular/router';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from './restaurante-detalhe/menu/menu.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login/:to', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'restaurantes/:id', component: RestauranteDetalheComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'avaliacao', component: AvaliacaoComponent }
        ]
    },
    { path: 'restaurantes', component: RestaurantesComponent },
    { path: 'home', component: HomeComponent },
    { path: 'compra', loadChildren: './compra/compra.module#CompraModule', canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
    { path: 'resultado', component: ResultadoComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', component: NotFoundComponent }
]
