import { Component,OnInit,AfterViewInit,ViewChild} from '@angular/core';
import { Auditoria } from 'src/app/modelos/auditoria';
import { AuditoriasService } from 'src/app/servicio/auditorias.service';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';



@Component({
  selector: 'app-lista-auditorias',
  templateUrl: './lista-auditorias.component.html',
  //template: '<app-lista [rowData]="rowData" [verBotones]="verBotones"(onSelection)="onRowSelected($event)"></app-lista>',
  styleUrls: ['./lista-auditorias.component.css']
})

export class ListaAuditoriasComponent implements OnInit,AfterViewInit {

    // Row data of cars to provide to the grid
    //auditorias: Auditoria[] | any; //quitarle el any para entender bien el error

    auditorias: Auditoria[] = [];
    //listaItems: Item[] = [];

    //rowData: Item[] | any;

    verBotones= false;

    //item = new Item();
    
    dataSource = new MatTableDataSource<Auditoria>();

    el: any = [];

    selection = new SelectionModel<Auditoria>(true, []);

    displayedColumns: string[] = ['seleccionar','iduser','fecha','editar','eliminar'];

    pageEvent!: PageEvent;

    pageSizeOptions!: number[];

    constructor(private AuditoriasService: AuditoriasService) {

    }

    ngOnInit()
    {
      this.pageEvent = new PageEvent();
      this.pageSizeOptions = [5, 10, 25, 100];
      this.pageEvent.pageSize = 10;
      this.listar();
    }

    listar()
    {
      this.AuditoriasService.obtenerAuditorias().subscribe(
        resp => {
          this.el = resp.shift();
          this.loadPagination(this.el);
          //console.log(resp);
          this.auditorias = resp;

          this.dataSource = new MatTableDataSource<Auditoria>(this.auditorias);

        });
    }

    listClientsReload() {


      this.loadPagination(this.el);
      this.dataSource = new MatTableDataSource<Auditoria>(this.auditorias.slice(this.pageEvent.pageSize, ((this.pageEvent.pageIndex * this.pageEvent.pageSize)+ this.pageEvent.pageSize)));

 
    }

    loadPagination(data:any) {
      this.pageEvent.length = data ? data.length: 0;
    }

    ngAfterViewInit() {

      //this.dataSource.paginator = this.paginator;
    }
   
    pager(pageEvent: PageEvent) {
      this.pageEvent = pageEvent;
  
      this.listClientsReload();
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








