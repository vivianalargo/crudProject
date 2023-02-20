import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import UsuarioData from '../../app/usuarios.json';
import { env } from 'src/enviroments/env';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  //useFactory: () => new UsuariosService(),
  deps: [],
})

export class UsuariosService {
  constructor(private http: HttpClient) { }

  usuario = [];

  //private url = env.urlServicios;

  

  obtenerUsuarios(): Observable<Usuario[]> { // Usuario[]
    //console.log(heroData);
    //return UsuarioData;

    return this.http.get<Usuario[]>('https://localhost:7250/api/Usuarios');
  }

  //Me permite guardar un nuevo usuario o modificar sus datos
  //validando username
  guardarUsuario(usuario:Usuario) {
    console.log("Estoy en guardarUsuario");
    //return UsuarioData;
    //return this.http.get<SelectListItem[]>(this.url + 'propertyTypes');

    //this.http.post<Usuario[]>(this.url + 'propertyTypes',usuario);

    //int id, string username, string nombre, string password
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