import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Servicios/Service/user.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent {
  responseData: any[] = [];
  
  constructor(private userService: UserService,  private router: Router) {}

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

  borrarSolicitud(id: string): void {
  window.alert("Has eliminado el numero: "+id)
  }

  aceptarSolicitud(id: number): void {
    window.alert("Has Aceptado el numero: "+id)
  }

}
