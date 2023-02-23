import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoguinComponent } from './Componentes/Loguin/loguin/loguin.component';
import { HomeComponent } from './Componentes/Home/home/home.component';
import { FormularioUsuariosComponent } from './Componentes/Usuarios/crear/formulario-usuarios/formulario-usuarios.component';
import { VisualizarComponent } from './Componentes/Usuarios/visualizar/visualizar.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "usuarios", component: VisualizarComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



