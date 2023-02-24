import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auditoria } from '../modelos/auditoria';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
  //useFactory: () => new AuditoriasService(),
  deps: [],
})

export class AuditoriasService {
  constructor(private http: HttpClient) { }

  auditoria = [];

 //listar todas los registros de auditoria
  obtenerAuditorias(): Observable<Auditoria[]> {
    console.log('este es el obtener todas las auditorias');
    //return AuditoriaData;

    return this.http.get<Auditoria[]>('https://localhost:7250/api/Auditoria');
  }

  //enviar una auditoria para su almacenamiento
  guardarAuditorias(auditoria:Auditoria){
    console.log('Este es el guardar de Auditorias');

  }
}

