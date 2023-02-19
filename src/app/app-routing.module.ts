import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
//import { HomeComponent } from './components/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*const routes: Routes = [
  { path: 'property-detail-component/:idProperty', component: PropertyDetailComponent},
  { path: 'inventario/:idEmpresa/:idObra/:nombreEmpresaObra', component: HomeComponent },
  { path: 'SicoCRMInventory/inventario/:idEmpresa/:idObra/:nombreEmpresaObra', component: HomeComponent },
  { path: '**', pathMatch:'full', redirectTo:'SicoCRMInventory/inventario/:idEmpresa/:idObra/:nombreEmpresaObra' }
  
];*/


