import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { Item } from 'src/app/modelos/itemLista';
import { UsuariosService } from 'src/app/servicio/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  //templateUrl: './lista-usuarios.component.html',
  template: '<app-lista [rowData]="rowData" (onSelection)="onRowSelected($event)"></app-lista>',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

    usuarios: Usuario[] = [];
    listaItems: Item[] = [];

    rowData: Item[] | any;

    //item = new Item();
    

    constructor(UsuariosService: UsuariosService) {
      console.log("entré aquí");

      this.usuarios = UsuariosService.obtenerUsuarios();

      for (let i = 0; i< this.usuarios.length; i++) {
        //console.log(scores[i]);

        
        let item = new Item();

        item.username = this.usuarios[i].username;
        item.campo2 = this.usuarios[i].name;

        this.listaItems.push(item);

      }

      this.rowData = this.listaItems;
      
      console.log(this.usuarios);
    }
    
    // Callback when a row is selected
    
    onRowSelected(event: Usuario){
      console.log('seleccionado');
    }


}

