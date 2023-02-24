import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent {
  usuarioEnviado:Usuario={
    id:0,
    username:'',    
    nombre: '',
    password:''
  };

  ngOnInit()
  {

  }

  editar(eventData:Usuario) {
    console.log("estoy en visualizar componentes");
    this.usuarioEnviado = eventData;

    console.log(this.usuarioEnviado);

  }

  salir()
  {
    //Salir de la aplicación, ir al home y cerrar sesión
  }

}
