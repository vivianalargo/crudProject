import { Component } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'; 

import { UsuariosService } from 'src/app/servicio/usuarios.service';
import { Usuario } from 'src/app/modelos/usuario';

import { AuditoriasService } from 'src/app/servicio/auditorias.service';
import { Auditoria } from 'src/app/modelos/auditoria';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})

export class LoguinComponent {

  hide = true;

  usuario: Usuario={
    id:0,
    username:'',    
    name: '',
    password:''
  };

  auditoria: Auditoria={
    id:0,
    username:'', 
    fecha:'',    

  };


  constructor(private UsuariosService:UsuariosService, private AuditoriasService:AuditoriasService) { }

  ngOnInit(): void {
  }

  VerificarUsuario(){
    //delete this.equipo.id_equipo;

    this.UsuariosService.obtenerUsuario(this.usuario);
  }

}
