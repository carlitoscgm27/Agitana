import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Servicios/Service/user.service';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css'],
})
export class DonarComponent {
  categoria: any;
  descripcion_producto!: string;
  idPersona: any;
  idCategoria: any;

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
      .crearDonacion(this.idCategoria, this.descripcion_producto, this.idPersona)
      .subscribe(
        (response) => {
          console.log('response', response);
          window.alert("Nueva Donación Creada")
          window.location.reload();
        },
        (error) => {
          console.log('error', error);
        }
      );
  }
}
