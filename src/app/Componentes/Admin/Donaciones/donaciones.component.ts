import { Component } from '@angular/core';
import { Donaciones } from 'src/app/Jsons/Donaciones';
import { Persona } from 'src/app/Jsons/Persona';
import { Productos } from 'src/app/Jsons/Productos';
import { Tipo } from 'src/app/Jsons/Tipo';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css'],
})
export class DonacionesComponent {
  donacion = Donaciones;
  tipo = Tipo;
  producto = Productos;
personas=Persona;

  buscarNombrePorTipo(tipoId: number): string | undefined {
    const tipo = this.tipo.find((t) => t.id === tipoId);
    return tipo ? tipo.Nombre : undefined;
  }
  buscarNombrePorProducto(productoId: number): string | undefined {
    const producto = this.producto.find((p) => p.Id === productoId);
    return producto ? producto.Nombre : undefined;
  }
  buscarApellidosPorPersona(personaId: number): string | undefined {
    const persona = this.personas.find((p) => p.Id === personaId);
    if (persona) {
      const primerApellido = persona.ApellidoPrimer;
      const segundoApellido = persona.ApellidoSegundo;
      return `${primerApellido} ${segundoApellido}`;
    }
    return undefined;
  }
  borrarSolicitud(id: number): void {
    window.alert('Has eliminado el numero: ' + id);
  }

  aceptarSolicitud(id: number): void {
    window.alert('Has Aceptado el numero: ' + id);
  }

  esperarSolicitud(id: number): void {
    window.alert('Has puesto en espera el numero: ' + id);
  }
}
