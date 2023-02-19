import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'; 

import { UsuariosService } from 'src/app/servicio/usuarios.service';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})


export class FormularioUsuariosComponent {
  hide = true;

  usuario: Usuario={
    id:0,
    username:'',    
    name: '',
    password:''
  };


  constructor(private UsuariosService:UsuariosService) { }

  ngOnInit(): void {
  }

  agregar(){
    //delete this.equipo.id_equipo;

    this.UsuariosService.guardarUsuario(this.usuario);
  }

}





