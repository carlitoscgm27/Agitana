import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../Servicios/Service/user.service';
import { PopUpComponent } from '../../Funciones/PopUp/pop-up.component';
import { Tabla } from '../../../Interfaces/Tabla';

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
  visiblepop: boolean = false;

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
    this.Stock = '';
    this.tabla = [];
    this.idCategoria = '';
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
    categorianombre: string,
    idnombre: number,
    idcategoria: number
  ): void {
    var nuevacantidad = window.prompt(
      'Tienes de ' +
        nombre +
        ' y son: ' +
        cantidad +
        '. ¿Cuantos quieres coger?'
    );

    if (nuevacantidad !== null) {
      this.cantidadfinal = cantidad - +nuevacantidad;

      if (this.cantidadfinal < 0) {
        window.alert('No puedes coger más de lo que hay.');
      } else {
        const tablas: Tabla = {
          id: id,
          nombre: nombre,
          cantidad: nuevacantidad,
          cantidadFinal: this.cantidadfinal,
          categorianombre: categorianombre,
          idnombre: idnombre,
          idcategoria: idcategoria,
          nombreProducto: '',
          idtipo: '',
        };

        this.tabla.push(tablas);
        const index = this.Stock.findIndex(
          (item: { id: number }) => item.id === id
        );
        if (index !== -1) {
          this.Stock.splice(index, 1);
        }
      }
    } else {
      console.log('Operación cancelada por el usuario.');
    }
  }

  modificar() {
    console.log('this tablaaaaa', this.tabla);
    for (var i = 0; i < this.tabla.length; i += 1) {
      this.userService
        .modificarStock(this.tabla[i].id, this.tabla[i].cantidadFinal)
        .subscribe(
          (response) => {
            console.log('response', response);
          },
          (error) => {
            console.log('error', error);
          }
        );

      this.userService
        .crearMovimiento(
          this.Solicitudes.id,
          0,
          this.tabla[i].cantidad,
          this.tabla[i].id
        )
        .subscribe(
          (response) => {
            console.log('response', response);
          },
          (error) => {
            console.log('error', error);
          }
        );
    }

    window.alert('Termino la subida');

    this.userService.modificarSoli(this.Solicitudes.id, '4').subscribe(
      (response) => {
        console.log('response', response);
        window.alert(
          'Se updateo a Aceptada la Solicitud: ' + this.Solicitudes.id
        );

        window.location.reload();
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  borrarSolicitud(id: string): void {
    window.alert('Has eliminado el numero: ' + id);
  }

  aceptarSolicitud(id: number): void {
    window.alert('Has Aceptado el numero: ' + id);
  }
}
