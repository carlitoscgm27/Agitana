import { Component } from '@angular/core';
import { UserService } from '../../../../Servicios/Service/user.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  nombre!: string;
  tipoDTO!: BigInteger;
  idCategoria: any;
  idTipo:any;
  categoria: any;
  tipo:any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCategoria().subscribe(
      (response) => {
        console.log('response', response);
        this.categoria = response;
      },
      (error) => {
        console.log('error', error);
      }
    );

    this.userService.getTipo().subscribe(
      (response) => {
        console.log('response', response);
        this.tipo = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

crearProducto(){
  this.userService.crearProducto(this.nombre,this.idCategoria,this.idTipo).subscribe(
    (response) => {
      console.log('response', response);
      window.alert("Nuevo Producto Creado")
    },
    (error) => {
      console.log('error', error);
          
    }
  );
}

}
