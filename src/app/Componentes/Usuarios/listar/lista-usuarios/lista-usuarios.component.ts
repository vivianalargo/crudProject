import { Component,EventEmitter,OnInit,AfterViewInit,OnChanges, ViewChild,SimpleChanges, ChangeDetectionStrategy   } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { Item } from 'src/app/modelos/itemLista';
import { UsuariosService } from 'src/app/servicio/usuarios.service';
import { Observable } from 'rxjs';

import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
//import { Item } from 'src/app/modelos/itemLista';




@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  //template: '<app-lista [rowData$]="rowData$" [verBotones]="verBotones" (onSelection)="onRowSelected($event)"></app-lista>',
  styleUrls: ['./lista-usuarios.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListaUsuariosComponent {

    usuarios: Usuario[] = [];
    //listaItems: Item[] = [];

    //rowData$: Item[] | any;

    //item = new Item();

    verBotones= true;


    dataSource = new MatTableDataSource<Usuario>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selection = new SelectionModel<Usuario>(true, []);

  //displayedColumns: string[] = ['username','fecha'];

  displayedColumns: string[] = ['seleccionar','username','nombre','editar','eliminar'];


  pageEvent!: PageEvent;
    

    constructor(private UsuariosService: UsuariosService) {
      /*console.log("entré aquí");

      UsuariosService.obtenerUsuarios().subscribe(
        resp => {

          console.log(resp);
          this.usuarios = resp;

          console.log(this.usuarios);
        });

      for (let i = 0; i< this.usuarios.length; i++) {
        //console.log(scores[i]);

        
        let item = new Item();

        item.username = this.usuarios[i].username;
        item.campo2 = this.usuarios[i].nombre;

        this.listaItems.push(item);

      }

      this.rowData = this.listaItems;
      
      console.log(this.usuarios);*/

      

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
      this.UsuariosService.obtenerUsuarios().subscribe(
        resp => {

          //console.log(resp);
          this.usuarios = resp;

          this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
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
    
    // Callback when a row is selected
    
    onRowSelected(event: Usuario){
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

