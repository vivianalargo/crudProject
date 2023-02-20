import { Component,EventEmitter,OnInit,AfterViewInit,OnChanges, ViewChild} from '@angular/core';
import { Auditoria } from 'src/app/modelos/auditoria';
import { Item } from 'src/app/modelos/itemLista';
import { AuditoriasService } from 'src/app/servicio/auditorias.service';

import { Observable } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-lista-auditorias',
  templateUrl: './lista-auditorias.component.html',
  //template: '<app-lista [rowData]="rowData" [verBotones]="verBotones"(onSelection)="onRowSelected($event)"></app-lista>',
  styleUrls: ['./lista-auditorias.component.css']
})

export class ListaAuditoriasComponent {

    // Row data of cars to provide to the grid
    //auditorias: Auditoria[] | any; //quitarle el any para entender bien el error

    auditorias: Auditoria[] = [];
    //listaItems: Item[] = [];

    //rowData: Item[] | any;

    verBotones= false;

    //item = new Item();
    
    dataSource = new MatTableDataSource<Auditoria>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    selection = new SelectionModel<Auditoria>(true, []);

    displayedColumns: string[] = ['seleccionar','username','fecha','editar','eliminar'];

    pageEvent!: PageEvent;
  

    constructor(private AuditoriasService: AuditoriasService) {
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

/*
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
      
      console.log(this.auditorias);*/
    }

    ngOnInit()
    {
      this.listar();
    }

    /*ngOnChanges(changes: SimpleChanges) {
      this.listar();

    }*/


    listar()
    {
      this.AuditoriasService.obtenerAuditorias().subscribe(
        resp => {

          //console.log(resp);
          this.auditorias = resp;

          this.dataSource = new MatTableDataSource<Auditoria>(this.auditorias);
          /*

          console.log(this.usuarios);

          for (let i = 0; i< this.usuarios.length; i++) {
            //console.log(scores[i]);
    
            
            let item = new Item();
    
            item.username = this.usuarios[i].username;
            item.campo2 = this.usuarios[i].nombre;
    
            this.listaItems.push(item);
    
          }
    
          console.log('usuarios, ver lista items')
          console.log(this.listaItems);
    
          this.rowData = this.listaItems;
          
          console.log(this.usuarios);
          console.log(this.rowData);*/
        });
    }
    

    ngAfterViewInit() {

      this.dataSource.paginator = this.paginator;
    }
   
    
    onRowSelected(event: Auditoria){
      console.log('seleccionado');
    }


    seleccionarFila(event:any,row: any) {


      if(event.target.checked==true){
        console.log(row);
      }
      else{
        console.log('checkbox is unchecked');
      }
  
      
  
    }
  
  
    editar(row: any) {
      console.log("editar" + row);
  
  
    }
  
    eliminar(row: any) {
  
        console.log("eliminar" + row);
  
    }

}








