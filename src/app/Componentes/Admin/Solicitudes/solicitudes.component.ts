import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Servicios/Service/user.service';

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
  Stock:any;

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
  loadProductos(id:number){
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
  borrarSolicitud(id: string): void {
    window.alert('Has eliminado el numero: ' + id);
  }

  aceptarSolicitud(id: number): void {
    window.alert('Has Aceptado el numero: ' + id);
  }
}
