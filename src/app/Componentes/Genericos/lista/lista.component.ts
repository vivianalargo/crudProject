import { Component ,Input,Output,EventEmitter,OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent<TData> implements OnInit {

  @Input() rowData?: TData[];
  @Output() onSelection: EventEmitter<TData> = new EventEmitter<TData>();


  dataSource = new MatTableDataSource<TData>();

  displayedColumns: string[] = ['seleccionar', 'columna1', 'columna2', 'editar', 'eliminar'];

  pageEvent!: PageEvent;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<TData>();
  }
}