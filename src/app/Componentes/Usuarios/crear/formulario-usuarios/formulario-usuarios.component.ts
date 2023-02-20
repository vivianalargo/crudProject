import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'; 
import { FormsModule } from '@angular/forms';
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
    nombre: '',
    password:''
  };


  constructor(private UsuariosService:UsuariosService) { }

  ngOnInit(): void {
  }

  guardar(){
    //delete this.equipo.id_equipo;
    //console.log('estoy en guardar usuario');
    //console.log(this.usuario);

    this.UsuariosService.guardarUsuario(this.usuario);
  }

}





