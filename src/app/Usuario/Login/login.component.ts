import { Component } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/Servicios/Datos/datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  password!: string;
  rol!: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Username', this.username);
        console.log('password', this.password);
        this.rol='Admin';
        console.log('response', response.token);
        window.alert(response.message);
        this.authService.setAuthToken(response.token);
        this.authService.setAuthRol(this.rol)
        if (this.rol) {
          if (this.rol == 'Admin') {
            console.log('Usuario Admin');
            this.router.navigate(['/Admin/Alta']).then(() => {
              window.location.href = '/Admin/Alta';
            });
            
          } else if (
            this.rol == 'User') {
            console.log('Usuario User ');
            this.router.navigate(['/User/InicioDonante']).then(() => {
              window.location.href = '/User/InicioDonante';
            });
          }
        }
        
    return console.log('Falso perrrrrrrrrrrrrrrrrrrrro');;
      },
      (error) => {
        console.log('Username', this.username);
        console.log('password', this.password);
        console.log(error);
      }
    );
  }
}
