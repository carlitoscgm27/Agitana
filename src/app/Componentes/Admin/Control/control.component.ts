import { Router } from '@angular/router';
import { UserService } from './../../../Servicios/Service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
})
export class ControlComponent {
  responseDataStock: any[] = [];
  responseDataProducto: any[] = [];
  responseDataTipo: any[] = [];
  responseDataCategoria: any[] = [];
  valor = 0;
  Buscador = false;
  searchTerm: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getStock().subscribe(
      (response) => {
        console.log('response', response);
        this.responseDataStock = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  filterData(dataType: number) {
    this.Buscador = true;

    let dataToFilter: any[] = [];

    switch (dataType) {
      case 0: // Stock
        dataToFilter = this.responseDataStock;
        this.valor = 0;
        break;
      case 1: // Producto
        dataToFilter = this.responseDataProducto;
        this.valor = 1;
        break;
      case 2: // Tipo
        dataToFilter = this.responseDataTipo;
        this.valor = 2;
        break;
      case 3: // Categoria
        dataToFilter = this.responseDataCategoria;
        this.valor = 3;
        break;
      default:
        break;
    }
    console.log(dataToFilter);
    if (this.searchTerm === '') {
      this.Buscador = false;
      console.log('entro en vacio');
      return dataToFilter;
    } else {
      return dataToFilter.filter((producto) =>
        producto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  loadData(valor: number) {
    console.log(`Entró en ${valor}`);
    this.searchTerm = '';
    this.valor = valor;
    switch (valor) {
      case 0:
        this.userService.getStock().subscribe(
          (response) => {
            console.log('response', response);
            this.responseDataStock = response;
          },
          (error) => {
            console.log('error', error);
          }
        );
        break;
      case 1:
        this.userService.getProductos().subscribe(
          (response) => {
            console.log('response', response);
            this.responseDataProducto = response;
          },
          (error) => {
            console.log('error', error);
          }
        );
        break;
      case 2:
        this.userService.getTipo().subscribe(
          (response) => {
            console.log('response', response);
            this.responseDataTipo = response;
          },
          (error) => {
            console.log('error', error);
          }
        );
        break;
      case 3:
        this.userService.getCategoria().subscribe(
          (response) => {
            console.log('response', response);
            this.responseDataCategoria = response;
          },
          (error) => {
            console.log('error', error);
          }
        );
        break;
      default:
        break;
    }
  }
}
