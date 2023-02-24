import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import UsuarioData from '../../app/usuarios.json';
import { env } from 'src/enviroments/env';
import { HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
  //useFactory: () => new UsuariosService(),
  deps: [],
})

export class UsuariosService {
  constructor(private http: HttpClient, private cookies: CookieService) { }

  usuario = [];

  private httpHeaders = new  HttpHeaders({
    'Content-Type':  'application/json'
  })

  obtenerUsuarios(): Observable<Usuario[]> { 
    //console.log('obtenerUsuarios');


    return this.http.get<Usuario[]>('https://localhost:7250/api/Usuarios');
  }

  //Me permite guardar un nuevo usuario o modificar sus datos
  guardarUsuario(usuario:Usuario):Observable<any>{

    console.log(usuario);

    return this.http.post<any>('https://localhost:7250/api/Usuarios',usuario,{
      headers:this.httpHeaders,
      observe:'response'
    });
  
  }

  eliminarUsuario(usuario:Usuario):Observable<any>{

    console.log(usuario);

    return this.http.delete<any>('https://localhost:7250/api/Usuarios'+"/"+usuario.id,{
      headers:this.httpHeaders,
      observe:'response'
    });
  }

  validarUsuario(usuario:Usuario): Observable<any> {
    console.log("Estoy en validarUsuario");

    console.log(usuario);

    return this.http.post<any>('https://localhost:7250/api/Loguin',usuario,{
      headers:this.httpHeaders,
      observe:'response'
    });

    //return this.http.post<any>('https://localhost:7250/api/Loguin', httpOptions);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }  
}