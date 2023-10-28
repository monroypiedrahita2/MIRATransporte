import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopaComponent } from './popa/popa.component';
import { AlamedaComponent } from './alameda/alameda.component';
import { GuadalupeComponent } from './guadalupe/guadalupe.component';
import { LibretaTelefonosComponent } from './libreta-telefonos/libreta-telefonos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'popa',
    component: PopaComponent
  },
  {
    path: 'alameda',
    component: AlamedaComponent
  },
  {
    path: 'guadalupe',
    component: GuadalupeComponent
  },
  {
    path: 'casas-de-apoyo',
    component: LibretaTelefonosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
