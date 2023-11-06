import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  nombre!: string;
  categoriaDTO!: BigInteger;
  tipoDTO!: BigInteger;
}
