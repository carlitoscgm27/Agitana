import { Component } from '@angular/core';
import { Solicitudes } from '../../../Jsons/Solicitudes'; // Asegúrate de que la ruta sea correcta
import { Tipo } from 'src/app/Jsons/Tipo';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Servicios/Service/user.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent {
  solicitud= Solicitudes; 
  tipo= Tipo;
  
  constructor(private userService: UserService,  private router: Router) {}

  ngOnInit(): void {
    this.userService.comprobarAdmin().subscribe(
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
  }

  buscarNombrePorTipo(tipoId: number): string | undefined {
    const tipo = this.tipo.find(t => t.id === tipoId);
    return tipo ? tipo.Nombre : undefined;
  }

  borrarSolicitud(id: number): void {
  window.alert("Has eliminado el numero: "+id)
  }

  aceptarSolicitud(id: number): void {
    window.alert("Has Aceptado el numero: "+id)
  }

  esperarSolicitud(id: number): void {
    window.alert("Has puesto en espera el numero: "+id)
  }

}
