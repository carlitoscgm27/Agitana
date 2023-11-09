import { Component } from '@angular/core';
import { UserService } from 'src/app/Servicios/Service/user.service';

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
      
    },
    (error) => {
      console.log('error', error);
          
    }
  );
}
}
