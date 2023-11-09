import { Component } from '@angular/core';
import { UserService } from 'src/app/Servicios/Service/user.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  nombre!: string;
  categoriaDTO!: BigInteger;
  tipoDTO!: BigInteger;

  constructor(private userService: UserService) {}

crearProducto(){
  this.userService.crearProducto(this.nombre,this.categoriaDTO,this.tipoDTO).subscribe(
    (response) => {
      console.log('response', response);
      
    },
    (error) => {
      console.log('error', error);
          
    }
  );
}

}
