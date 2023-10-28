import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlamedaComponent } from './alameda/alameda.component';
import { GuadalupeComponent } from './guadalupe/guadalupe.component';
import { PopaComponent } from './popa/popa.component';
import { LibretaTelefonosComponent } from './libreta-telefonos/libreta-telefonos.component';
import { CardInfoComponent } from './card-info/card-info.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormularioComponent,
    AlamedaComponent,
    GuadalupeComponent,
    PopaComponent,
    LibretaTelefonosComponent,
    CardInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
