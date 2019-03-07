import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  { path: '', component: AboutComponent }
]

@NgModule({
  declarations: [ AboutComponent ],
  imports: [ RouterModule.forChild(ROUTES) ]
})
export class AboutModule { }
