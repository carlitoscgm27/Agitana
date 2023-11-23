import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../Servicios/Service/user.service';
import { PopUpComponent } from '../../Funciones/PopUp/pop-up.component';

interface Tabla {
  id: number;
  nombre: string;
  cantidad: any;
  categorianombre: string;
}
@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css'],
})
export class SolicitudesComponent {
  responseData: any[] = [];
  isVisible: boolean = false;
  solicitud: any;
  Solicitudes: any;
  idCategoria: any;
  categoria: any;
  Stock: any;
  tabla: Tabla[] = [];
  cantidadfinal: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.listarSolicitudes().subscribe(
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
  }
  administrar(solicitud: number) {
    console.log(solicitud);
    this.userService.listarSolicitudesId(solicitud).subscribe(
      (response) => {
        console.log('solicitud', response);
        this.Solicitudes = response;
      },
      (error) => {
        console.log('error', error);
      }
    );

    this.isVisible = !this.isVisible;
    this.userService.getCategoria().subscribe(
      (response) => {
        console.log('response', response);
        this.categoria = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  cerrar() {
    if (!this.isVisible) {
      console.log('Mostrando el componente');
    } else {
      console.log('Ocultando el componente');
    }

    this.isVisible = !this.isVisible;
  }
  loadProductos(id: number) {
    this.userService.listarStocksCategoria(id).subscribe(
      (response) => {
        console.log('response', response);
        this.Stock = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  quitar(
    id: number,
    cantidad: number,
    nombre: string,
    categorianombre: string
  ): void {
    var nuevacantidad = window.prompt(
      'Tienes de ' +
        nombre +
        ' y son: ' +
        cantidad +
        '. ¿Cuantos quieres coger?'
    );
      if (nuevacantidad !== undefined) {
        
        if (this.cantidadfinal < 0) {
          
          console.log('No puedes coger más de lo que hay.');
        } else {
          const tablas: Tabla = {
            id: id,
            nombre: nombre,
            cantidad: nuevacantidad,
            categorianombre: categorianombre,
          };
  
          this.tabla.push(tablas);
        }
      } else {
        console.log('Operación cancelada por el usuario.');
      }
   
  }

  borrarSolicitud(id: string): void {
    window.alert('Has eliminado el numero: ' + id);
  }

  aceptarSolicitud(id: number): void {
    window.alert('Has Aceptado el numero: ' + id);
  }
}
