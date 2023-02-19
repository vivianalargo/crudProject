import { Component ,Input,Output,EventEmitter,OnInit,AfterViewInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import { Item } from 'src/app/modelos/itemLista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent<TData> implements OnInit{

  @Input() rowData!: TData[];
  @Output() onSelection: EventEmitter<TData> = new EventEmitter<TData>();


  dataSource = new MatTableDataSource<TData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selection = new SelectionModel<TData>(true, []);

  //displayedColumns: string[] = ['username','fecha'];

  displayedColumns: string[] = ['select','username','campo2'];


  pageEvent!: PageEvent;

  //dataSource = this.rowData;

  ngOnInit() {
    console.log('componente generico');
    console.log(this.rowData);

    


    this.dataSource = new MatTableDataSource<TData>(this.rowData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /*constructor() {
    console.log('componente generico');
    console.log(this.rowData);
    this.dataSource = new MatTableDataSource<TData>(this.rowData);
  }*/

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  
  /** The label for the checkbox on the passed row */
  /*checkboxLabel(row?: TData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row. + 1}`;
  }*/
}