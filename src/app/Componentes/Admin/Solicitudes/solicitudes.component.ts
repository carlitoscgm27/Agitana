import { Component } from '@angular/core';
import { Solicitudes } from '../../../Jsons/Solicitudes'; // Asegúrate de que la ruta sea correcta
import { Tipo } from 'src/app/Jsons/Tipo';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent {
  solicitud= Solicitudes; 
  tipo= Tipo;


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
