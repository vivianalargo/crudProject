import { Component } from '@angular/core';
import { Auditoria } from 'src/app/modelos/auditoria';
import { Item } from 'src/app/modelos/itemLista';
import { AuditoriasService } from 'src/app/servicio/auditorias.service';

@Component({
  selector: 'app-lista-auditorias',
  /*templateUrl: './lista-auditorias.component.html',*/
  template: '<app-lista [rowData]="rowData" (onSelection)="onRowSelected($event)"></app-lista>',
  styleUrls: ['./lista-auditorias.component.css']
})

export class ListaAuditoriasComponent {

    // Row data of cars to provide to the grid
    auditorias: Auditoria[] | any; //quitarle el any para entender bien el error

    rowData: Item[] | any;

    item = new Item();
    
    constructor(AuditoriasService: AuditoriasService) {
      console.log("entré aquí");


      this.rowData = AuditoriasService.getAuditorias();
      console.log(this.rowData);
    }
    
    // Callback when a row is selected
    
    onRowSelected(event: Auditoria){
      console.log('seleccionado');
    }

}





