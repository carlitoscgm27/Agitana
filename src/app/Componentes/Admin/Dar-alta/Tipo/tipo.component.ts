import { Component } from '@angular/core';
import { UserService } from '../../../../Servicios/Service/user.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent {
  nombre!: string;

  constructor(private userService: UserService) {}

crearTipo(){
  this.userService.crearTipo(this.nombre).subscribe(
    (response) => {
      console.log('response', response);
      window.alert("Nuevo Tipo Creado")
    },
    (error) => {
      console.log('error', error);
          
    }
  );
}
}
