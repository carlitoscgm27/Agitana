import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Servicios/Service/user.service';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  private userUrl = 'User/Usuario/listar';
  private adminUrl = 'Admin/Usuario/listar';
  isScrolled = false;
  rol: any;  
  idPersona: any;
  userTipo: any;
  nombre: any;
  UserNombre: any[] = [];
  ComprobarUser: any[] = [];
  Persona:any;
  todo:any;
  tipo:any;
  primero:any;
  segundo:any;
  telefono: any; 
  dni:any;
  listar:any;
  solicitud:any;
  donacion:any;
  nom:any;
  estado:any;

  isVisible=false;
  constructor(
    public userService: UserService,
    private router: Router,
    private authService: AuthService


  ) { }
  ngOnInit(): void {
    if (this.rol == '') {
      this.rol = '';
    } else this.rol = this.authService.getAuthRol();
    if (this.idPersona == '') {
      this.idPersona = '';
    } else this.idPersona = this.authService.getAuthIdPersona();
    if (this.userTipo == '') {
      this.userTipo = '';
    } else this.userTipo = this.authService.getAuthUserType();
    this.comprobar()
    if (this.rol =="USER"){this.lista()}
  }



  lista(){
    if (this.userTipo =="RECIBIDOR"){
    this.userService.listaSolicitudPersona(this.idPersona).subscribe(
      (response) => {
        console.log('response', response);
        this.isVisible=true
        this.solicitud=response
        
      },
      (error) => {
        console.log('error', error);

      }
    );
  }else{
    this.userService.listaDonacionPersona(this.idPersona).subscribe(
      (response) => {
        console.log('response', response);
        this.isVisible=true
        this.donacion=response
        
      },
      (error) => {
        console.log('error', error);

      }
    );
  }


  

  }
  comprobar() {
    if (this.rol == "ADMIN") {
      this.userService.comprobarAdmin().subscribe(
        (response) => {
          console.log('response', response);
          this.todo=response
          this.nombre=response.username
          this.rol=response.tipoRol
          this.tipo=response.personaDTO
        },
        (error) => {
          console.log('error', error);
          this.router.navigate(['../../403']).then(() => {
            window.location.href = '../../403';
          });
        }
      );

    } else this.userService.comprobarUser().subscribe(
      (response) => {
        console.log('response', response);
        this.todo=response
        this.nombre=response.username
        this.tipo=response.personaDTO.tipoPersona
        this.primero=response.personaDTO.apellido_Primero
        this.segundo= response.personaDTO.apellido_Segundo
        this.telefono=response.personaDTO.telefono
        this.dni=response.personaDTO.dni
      },
      (error) => {
        console.log('error', error);
        this.router.navigate(['../../403']).then(() => {
          window.location.href = '../../403';
        });
      }
    );




  }


}



