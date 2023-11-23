import { Component } from '@angular/core';
import { UserService } from '../../../../Servicios/Service/user.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  nombre!: string;
  descripcion!: string;

  constructor(private userService: UserService) {}

crearCategoria(){
  this.userService.crearCategoria(this.nombre,this.descripcion).subscribe(
    (response) => {
      console.log('response', response);
      window.alert("Nueva Categoria Creada")
    },
    (error) => {
      console.log('error', error);
          
    }
  );
}
}
