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


  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
  }

  guardar(){

      this.usuariosService.guardarUsuario(this.usuario).subscribe(
        resp=>{
            //console.log(data);
            if(resp.body == 0)
            {
                console.log('No se guardar el usuario');
                alert('No se puede guadar el usuario');
            }
        });
  }

}





