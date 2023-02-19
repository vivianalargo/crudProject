import { Component ,Input,Output,EventEmitter,OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent<TData> implements OnInit{

  @Input() rowData!: TData[];
  @Output() onSelection: EventEmitter<TData> = new EventEmitter<TData>();


  dataSource = new MatTableDataSource<TData>();



  

  //displayedColumns: string[] = ['username','fecha'];

  displayedColumns: string[] = ['username','campo2'];


  pageEvent!: PageEvent;

  //dataSource = this.rowData;

  ngOnInit() {
    console.log('componente generico');
    console.log(this.rowData);

    


    this.dataSource = new MatTableDataSource<TData>(this.rowData);
  }

  /*constructor() {
    console.log('componente generico');
    console.log(this.rowData);
    this.dataSource = new MatTableDataSource<TData>(this.rowData);
  }*/
}