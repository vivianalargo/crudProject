import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import UsuarioData from '../../app/usuarios.json';
import { env } from 'src/enviroments/env';
import { HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  //useFactory: () => new UsuariosService(),
  deps: [],
})

export class UsuariosService {
  constructor(private http: HttpClient) { }

  usuario = [];

  private httpHeaders = new  HttpHeaders({
    'Content-Type':  'application/json'
  })

  obtenerUsuarios(): Observable<Usuario[]> { 
    //console.log('obtenerUsuarios');


    return this.http.get<Usuario[]>('https://localhost:7250/api/Usuarios');
  }

  //Me permite guardar un nuevo usuario o modificar sus datos
  //validando username
  guardarUsuario(usuario:Usuario):Observable<any>{
    //console.log("Estoy en guardarUsuario");
    //let httpOptions = {headers: new HttpHeaders({ 'content-Type': 'application/json' })};

    console.log(usuario);

    /*let params: HttpParams = new HttpParams();
    params = params.append('username', usuario.username);
    params = params.append('nombre', usuario.nombre);
    params = params.append('password', usuario.password);
  */



   //{ username: usuario.username, nombre:usuario.nombre,password:usuario.password}

    //let body = 'username=${'dario'}' 
    /*this.http.post<any>('https://localhost:7250/api/Usuarios',usuario).subscribe(x => {
      console.log('acabé');

      
    });*/

    //let resp = 1;
    //return resp;

    return this.http.post<any>('https://localhost:7250/api/Usuarios',usuario,{
      headers:this.httpHeaders,
      observe:'response'
    });
  
  }

  peticion(usuario:Usuario):Observable<any>
  {
    return this.http.post<any>('https://localhost:7250/api/Usuarios',usuario,{
      headers:this.httpHeaders,
      observe:'response'
    });
  }

  //Me permite obtener la info de un nuevo usuario o modificar sus datos
  //validando username
  validarUsuario(usuario:Usuario) { //return ? : Usuario[]
    console.log("Estoy en validarUsuario");

    console.log(usuario);

    let params: HttpParams = new HttpParams();
    params = params.append('username', usuario.username);
    params = params.append('password', usuario.password);
  
    let httpOptions = {
      params: params
    };
  
    return this.http.post<any>('https://localhost:7250/api/Loguin', httpOptions);
  }


  eliminarUsuario(idUsuario:number) { //return ? : Usuario[]
    console.log("Estoy en eliminarUsuario");
    //return UsuarioData;
  }

  
}