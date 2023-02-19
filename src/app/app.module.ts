import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoguinComponent } from './Componentes/Loguin/loguin/loguin.component';
import { ListaComponent } from './Componentes/Genericos/lista/lista.component';
import { ListaUsuariosComponent } from './Componentes/Usuarios/listar/lista-usuarios/lista-usuarios.component';
import { FormularioUsuariosComponent } from './Componentes/Usuarios/crear/formulario-usuarios/formulario-usuarios.component';
import { ListaAuditoriasComponent } from './Componentes/Auditorias/listar/lista-auditorias/lista-auditorias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoguinComponent,
    ListaComponent,
    ListaUsuariosComponent,
    FormularioUsuariosComponent,
    ListaAuditoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



