import { Component } from '@angular/core';
import { Auditoria } from 'src/app/modelos/auditoria';
import { Item } from 'src/app/modelos/itemLista';
import { AuditoriasService } from 'src/app/servicio/auditorias.service';

@Component({
  selector: 'app-lista-auditorias',
  /*templateUrl: './lista-auditorias.component.html',*/
  template: '<app-lista [rowData]="rowData" [verBotones]="verBotones"(onSelection)="onRowSelected($event)"></app-lista>',
  styleUrls: ['./lista-auditorias.component.css']
})

export class ListaAuditoriasComponent {

    // Row data of cars to provide to the grid
    //auditorias: Auditoria[] | any; //quitarle el any para entender bien el error

    auditorias: Auditoria[] = [];
    listaItems: Item[] = [];

    rowData: Item[] | any;

    verBotones= false;

    //item = new Item();
    

    constructor(AuditoriasService: AuditoriasService) {
      /*console.log("entré aquí");


      this.auditorias = AuditoriasService.obtenerAuditorias();


      for (let i = 0; i< this.auditorias.length; i++) {
        //console.log(scores[i]);

        
        let item = new Item();

        item.username = this.auditorias[i].username;
        item.campo2 = this.auditorias[i].fecha;

        this.listaItems.push(item);

      }

      this.rowData = this.listaItems;
      
      console.log(this.auditorias);*/


      AuditoriasService.obtenerAuditorias().subscribe(
        resp => {
          this.auditorias = resp;
        });

      for (let i = 0; i< this.auditorias.length; i++) {
        //console.log(scores[i]);

        
        let item = new Item();

        item.username = this.auditorias[i].iduser;
        item.campo2 = this.auditorias[i].fecha;

        this.listaItems.push(item);

      }

      this.rowData = this.listaItems;
      
      console.log(this.auditorias);
    }
    
    // Callback when a row is selected
    
    onRowSelected(event: Auditoria){
      console.log('seleccionado');
    }

}








