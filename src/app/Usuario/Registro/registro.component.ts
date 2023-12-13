import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Servicios/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  username!: string;
  password!: string;
  nombre!: string;
  apellido1!: string;
  apellido2!: string;
  telefono!: string;
  dni!: string;
  tipo!: BigInteger;
  touched = {
    username: false,
    password: false,
    nombre:false,
    apellido1:false,
    apellido2:false,
    telefono:false,
    dni:false,
    tipo:false,
  };
  loginForm!: FormGroup;
 

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {this.loginForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });}
 
 
 
 
  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      telefono: ['', Validators.required],
      dni: ['', Validators.required],
      tipo: ['', Validators.required],
    })
  }
 
  subida(){
    console.log(this.tipo)
  }
  onSubmit() {
    this.authService
      .register(
        this.username,
        this.password,
        this.nombre,
        this.apellido1,
        this.apellido2,
        this.telefono,
        this.dni,
        this.tipo
      )
      .subscribe(
        (response) => {
          if (response.token == null) {
            console.log('entro en null');
            window.alert(response.message);
          } else {
            console.log('Username', response);
            console.log('Username', this.username);
            console.log('password', this.password);
            console.log('response', response.rol);
            console.log('response', response.token);
            window.alert(response.message);
            this.authService.setAuthToken(response.token);
            this.authService.setAuthRol(response.rol);
            this.authService.setAuthNombre(this.username);
            this.authService.setAuthId(response.id);
            if (response.rol) {
              if (response.rol == 'ADMIN') {
                console.log('Usuario Admin');
                this.router.navigate(['/Admin/Alta']).then(() => {
                  window.location.href = '/Admin/Alta';
                });
              } else if (response.rol == 'USER') {
                this.authService.setAuthUserType(response.tipo);
                this.authService.setAuthIdPersona(response.idPersona);
                if (response.rol == 'RECIBIDOR') {
                  console.log('Usuario User Recibidor');
                  this.router.navigate(['/User/InicioRecibidor']).then(() => {
                    window.location.href = '/User/InicioRecibidor';
                  });
                } else console.log('Usuario User Donante');
                this.router.navigate(['/User/InicioDonante']).then(() => {
                  window.location.href = '/User/InicioDonante';
                });
              }
            }

            return console.log('Falso perrrrrrrrrrrrrrrrrrrrro');
          }
        },
        (error) => {
          console.log('Username', this.username);
          console.log('password', this.password);
          console.log(error);
        }
      );
  }
}
