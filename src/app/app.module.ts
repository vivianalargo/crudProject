import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
 

import { MatTableModule } from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoguinComponent } from './Componentes/Loguin/loguin/loguin.component';
import { ListaComponent } from './Componentes/Genericos/lista/lista.component';
import { ListaUsuariosComponent } from './Componentes/Usuarios/listar/lista-usuarios/lista-usuarios.component';
import { FormularioUsuariosComponent } from './Componentes/Usuarios/crear/formulario-usuarios/formulario-usuarios.component';
import { ListaAuditoriasComponent } from './Componentes/Auditorias/listar/lista-auditorias/lista-auditorias.component';
import { HomeComponent } from './Componentes/Home/home/home.component';
import { VisualizarComponent } from './Componentes/Usuarios/visualizar/visualizar.component';


import { CookieService } from 'ngx-cookie-service';
//import { httpInterceptorProviders } from './http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoguinComponent,
    ListaComponent,
    ListaUsuariosComponent,
    FormularioUsuariosComponent,
    ListaAuditoriasComponent,
    HomeComponent,
    VisualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }



