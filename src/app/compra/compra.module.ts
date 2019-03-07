import { SharedModule } from './../compartilhada/compartilhada.module';
import { FreteComponent } from './frete/frete.component';
import { ItemCompraComponent } from './item-compra/item-compra.component';
import { CompraComponent } from './compra.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  { path: '', component: CompraComponent }
]

@NgModule({
  declarations: [CompraComponent, ItemCompraComponent, FreteComponent],
  imports: [ SharedModule, RouterModule.forChild(ROUTES) ]
})
export class CompraModule { }
