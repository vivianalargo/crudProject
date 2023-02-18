import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoguinComponent } from './Componentes/Loguin/loguin/loguin.component';
import { ListaComponent } from './Componentes/Genericos/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    LoguinComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



