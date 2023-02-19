import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auditoria } from '../modelos/auditoria';
import AuditoriaData from '../../app/auditorias.json';

@Injectable({
  providedIn: 'root',
  useFactory: () => new AuditoriasService(),
  deps: [],
})

export class AuditoriasService {
  constructor() {}

  auditoria = [];

 //listar todas los registros de auditoria
  obtenerAuditorias(): Auditoria[] {
    console.log('este es el obtener todas las auditorias');
    return AuditoriaData;
  }

  //enviar una auditoria para su almacenamiento
  guardarAuditorias(auditoria:Auditoria){
    console.log('Este es el guardar de Auditorias');

  }
}

