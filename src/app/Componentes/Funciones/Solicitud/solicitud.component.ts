import { Component } from '@angular/core';
import { UserService } from '../../../Servicios/Service/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../Servicios/auth.service';
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
    categoria: any;
    idPersona: any;
    idCategoria: any;
    idAlmacen:any;
    
  
    constructor(
      private userService: UserService,
      private router: Router,
      private authService: AuthService
    ) {}
  
    ngOnInit(): void {
      if (this.idPersona == '') {
        this.idPersona = '';
      } else this.idPersona = this.authService.getAuthIdPersona();
      this.userService.comprobarUser().subscribe(
        (response) => {
          console.log('response', response);
        },
        (error) => {
          console.log('error', error);
          this.router.navigate(['../../403']).then(() => {
            window.location.href = '../../403';
          });
        }
      );
  
      this.userService.getCategoriaUSER().subscribe(
        (response) => {
          console.log('response', response);
          this.categoria = response;
        },
        (error) => {
          console.log('error', error);
          this.router.navigate(['../../403']).then(() => {
            window.location.href = '../../403';
          });
        }
      );
    }
  
    onSubmit() {
      this.userService
        .crearSolicitud(this.idCategoria, this.idPersona)
        .subscribe(
          (response) => {
            console.log('response', response);
            window.alert("Nueva Solicitud Creada")
            window.location.reload();
          },
          (error) => {
            console.log('error', error);
          }
        );
    }
  }

