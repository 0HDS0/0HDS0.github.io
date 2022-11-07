import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Teste1Component } from './teste1/teste1.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DiretivasAtributoComponent } from './diretivas-atributo/diretivas-atributo.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';

@NgModule({
  declarations: [
    AppComponent,
    Teste1Component,
    DataBindingComponent,
    DiretivasAtributoComponent,
    DiretivasEstruturaisComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
