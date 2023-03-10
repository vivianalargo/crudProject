import { Component ,Input,Output,EventEmitter,OnInit,AfterViewInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import { Item } from 'src/app/modelos/itemLista';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent<TData> implements OnInit{

  @Input() rowData!: TData[];
  @Output() onSelection: EventEmitter<TData> = new EventEmitter<TData>();

  @Input() verBotones!: boolean;

  dataSource = new MatTableDataSource<TData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selection = new SelectionModel<TData>(true, []);

  displayedColumns: string[] = ['seleccionar','username','campo2','editar','eliminar'];


  pageEvent!: PageEvent;

  //dataSource = this.rowData;

  ngOnInit() {
    //console.log('componente generico');
    //console.log(this.rowData);


    this.dataSource = new MatTableDataSource<TData>(this.rowData);
  }

  ngAfterViewInit() {
    //this.dataSource = new MatTableDataSource<TData>(this.rowData);
    //this.dataSource.data = this.rowData$
    this.dataSource.paginator = this.paginator;
  }

  /*constructor() {
    console.log('componente generico');
    console.log(this.rowData);
    this.dataSource = new MatTableDataSource<TData>(this.rowData);
  }*/

 
  /*isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);

    console.log(this.selection);
  }*/


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