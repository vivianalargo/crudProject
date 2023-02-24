import { Component,Input } from '@angular/core';

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

  @Input() usuarioEnviado: Usuario={
    id:0,
    username:'',    
    nombre: '',
    password:''
  };


  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
  }

  guardar(){

    console.log(this.usuarioEnviado);

    if( this.usuarioEnviado.username===''|| this.usuarioEnviado.nombre=== '' || this.usuarioEnviado.password==='')
    {
      alert('Por favor complete los datos del formulario');
    }
    else
    {
      
      this.usuariosService.guardarUsuario(this.usuarioEnviado).subscribe(
        resp=>{
            //console.log(data);
            if(resp.body <= 0)
            {
                console.log('No se guardar el usuario');
                alert('No se puede guadar el usuario');
            }

        });

        this.usuarioEnviado ={
          id:0,
          username:'',    
          nombre: '',
          password:''
        };
    }
      
      
  }

}





