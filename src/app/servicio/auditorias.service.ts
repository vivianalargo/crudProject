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

  getAuditorias(): Auditoria[] {
    console.log(AuditoriaData);
    return AuditoriaData;
  }
}

