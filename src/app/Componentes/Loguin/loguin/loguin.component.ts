import { Component,Injectable  } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'; 

import { UsuariosService } from 'src/app/servicio/usuarios.service';
import { Usuario } from 'src/app/modelos/usuario';

import { AuditoriasService } from 'src/app/servicio/auditorias.service';
import { Auditoria } from 'src/app/modelos/auditoria';

//import { StorageService } from 'src/app/servicio/storage.service';

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

  /*isLoggedIn = false;
  isLoginFailed = false;

  errorMessage = '';
  roles: string[] = [];*/


  constructor(private usuariosService:UsuariosService, private AuditoriasService:AuditoriasService, public router: Router) { }


  
  ngOnInit(): void {

    /*if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      //this.roles = this.storageService.getUser().roles;
    }*/

  }

  validarUsuario(){
    //delete this.equipo.id_equipo;

    //this.UsuariosService.validarUsuario(this.usuario);


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
              //this.storageService.saveUser(this.usuario.username);

              //this.isLoginFailed = false;
              //this.isLoggedIn = true;
              //this.roles = this.storageService.getUser().roles;
              this.router.navigateByUrl('/usuarios');
          }
      });
  }

}
