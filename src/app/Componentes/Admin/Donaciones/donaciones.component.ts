import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../Servicios/Service/user.service';
import { Tabla } from 'src/app/Interfaces/Tabla';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css'],
})
export class DonacionesComponent {
  responseData: any[] = [];
  isVisible: boolean = false;
  donacion: any;
  Donaciones: any;
  tabla: Tabla[] = [];
  nombreProducto: any;
  categoriaProducto: any;
  tipoProducto: any;
  cantidad: any;
  idProducto: any;
  idCategoria: any;
  idTipo: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.listarDonacion().subscribe(
      (response) => {
        console.log('response', response);
        this.responseData = response;

      },
      (error) => {
        console.log('error', error);
        this.router.navigate(['../../403']).then(() => {
          window.location.href = '../../403';
        });
      }
    );

    this.userService.getProductos().subscribe(
      (response) => {
        console.log('response', response);
        this.nombreProducto = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
    this.userService.getCategoria().subscribe(
      (response) => {
        console.log('response', response);
        this.categoriaProducto = response;
      },
      (error) => {
        console.log('error', error);
      }
    );

    this.userService.getTipo().subscribe(
      (response) => {
        console.log('response', response);
        this.tipoProducto = response;
      },
      (error) => {
        console.log('error', error);
      }
    );

  }
  administrar(donacion: number) {
    console.log(donacion);
    this.userService.listarDonacionesId(donacion).subscribe(
      (response) => {
        console.log('donacion', response);
        this.Donaciones = response;
      },
      (error) => {
        console.log('error', error);

      }
    );

    this.isVisible = !this.isVisible;
  }
  cerrar() {
    if (!this.isVisible) {
      console.log('Mostrando el componente');
    } else {
      console.log('Ocultando el componente');
    }

    this.isVisible = !this.isVisible;
  }

  borrarDonacion(id: number): void {
    window.alert('Has eliminado el numero: ' + id);
  }

 
  subir() {

    this.userService.getProductosId(this.idProducto).subscribe(
      (response) => {
        console.log('response', response);
        
      },
      (error) => {
        console.log('error', error);
      }
    );
    this.userService.getCategoria().subscribe(
      (response) => {
        console.log('response', response);
        
      },
      (error) => {
        console.log('error', error);
      }
    );

    this.userService.getTipo().subscribe(
      (response) => {
        console.log('response', response);
        
      },
      (error) => {
        console.log('error', error);
      }
    );

    const tablas: Tabla = {
      nombreProducto: this.nombreProducto[this.idProducto].nombre,
      idcategoria: this.idCategoria,
      idtipo: this.idTipo,
      cantidad: this.cantidad,
      id: 0,
      nombre: '',
      cantidadFinal: undefined,
      categorianombre: '',
      idnombre: 0
    };
    console.log(this.idProducto)
    this.tabla.push(tablas);
    this.idProducto = ""
    this.idCategoria = ""
    this.idTipo = ""
    this.cantidad = ""

  }
}

