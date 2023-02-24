import { Component,Injectable  } from '@angular/core';

import { UsuariosService } from 'src/app/servicio/usuarios.service';
import { Usuario } from 'src/app/modelos/usuario';

import { AuditoriasService } from 'src/app/servicio/auditorias.service';
import { Auditoria } from 'src/app/modelos/auditoria';

import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})


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
    nombre: '',
    password:''
  };

  auditoria: Auditoria={
    id:0,
    iduser:'', 
    fecha:'',    

  };

  constructor(private usuariosService:UsuariosService, private AuditoriasService:AuditoriasService, public router: Router) { }


  
  ngOnInit(): void {



  }

  validarUsuario(){

    if( this.usuario.username===''|| this.usuario.password==='')
    {
      alert('Por favor complete los datos del formulario');
    }
    else
    {
      this.usuariosService.validarUsuario(this.usuario).subscribe(
        resp=>{
            console.log(resp);
            if(resp.body <= 0)
            {
                console.log('Acceso Denegado');
                alert('Acceso Denegado');
            }
            else
            {
                this.usuariosService.setToken(resp.ok);
  
                this.router.navigateByUrl('/usuarios');
            }
        });
    }
  }

}
