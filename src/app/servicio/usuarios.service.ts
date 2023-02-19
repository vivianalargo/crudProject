import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import UsuarioData from '../../app/usuarios.json';

@Injectable({
  providedIn: 'root',
  useFactory: () => new UsuariosService(),
  deps: [],
})

export class UsuariosService {
  constructor() {}

  usuario = [];

  obtenerUsuarios(): Usuario[] {
    //console.log(heroData);
    return UsuarioData;
  }

  //Me permite guardar un nuevo usuario o modificar sus datos
  //validando username
  guardarUsuario(usuario:Usuario) {
    console.log("Estoy en guardarUsuario");
    //return UsuarioData;
  }


  //Me permite obtener la info de un nuevo usuario o modificar sus datos
  //validando username
  obtenerUsuario(usuario:Usuario) { //return ? : Usuario[]
    console.log("Estoy en obtenerUsuario");
    //return UsuarioData;
  }

    //Me permite obtener la info de un nuevo usuario o modificar sus datos
  //validando username
  eliminarUsuario(idUsuario:number) { //return ? : Usuario[]
    console.log("Estoy en eliminarUsuario");
    //return UsuarioData;
  }

  
}