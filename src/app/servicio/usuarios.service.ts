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

  getUsuarios(): Usuario[] {
    //console.log(heroData);
    return UsuarioData;
  }
}