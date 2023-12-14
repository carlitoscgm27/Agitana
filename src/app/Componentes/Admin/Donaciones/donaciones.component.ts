import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../Servicios/Service/user.service';
import { Tabla } from 'src/app/Interfaces/Tabla';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css'],
})
export class DonacionesComponent {
  responseData: any[] = [];
  isVisible: boolean = false;
  donacion: any;
  Donaciones: any;
  tabla: Tabla[] = [];
  productos: any;
  nombreProducto: any;
  categoriaProducto: any;
  tipoProducto: any;
  cantidad: any;
  idProducto: any;
  suma: any;
  Stock: any;
  CreateStock: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.listarDonacion().subscribe(
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

    this.userService.getProductos().subscribe(
      (response) => {
        console.log('response', response);
        this.productos = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  administrar(donacion: number) {
    console.log(donacion);
    this.userService.listarDonacionesId(donacion).subscribe(
      (response) => {
        console.log('donacion', response);
        this.Donaciones = response;
      },
      (error) => {
        console.log('error', error);
      }
    );

    this.isVisible = !this.isVisible;
  }
  cerrar() {
    if (!this.isVisible) {
      console.log('Mostrando el componente');
    } else {
      console.log('Ocultando el componente');
    }

    this.isVisible = !this.isVisible;
    this.tabla = [];
    this.idProducto = '';
    this.cantidad = '';
  }

  borrarDonacion(id: number): void {
    window.alert('Has eliminado el numero: ' + id);
  }

  subir(cantidad: any) {
    this.userService.getProductosId(this.idProducto).subscribe(
      (response) => {
        console.log('response', response);
        this.nombreProducto = response;

        const tablas: Tabla = {
          nombreProducto: this.nombreProducto.nombre,
          idcategoria: this.nombreProducto.categoriaDTO.id,
          idtipo: this.nombreProducto.tipoDTO.nombre,
          cantidad: cantidad,
          id: this.nombreProducto.id,
          nombre: '',
          cantidadFinal: undefined,
          categorianombre: this.nombreProducto.categoriaDTO.nombre,
          idnombre: 0,
        };

        this.tabla.push(tablas);
      },
      (error) => {
        console.log('error', error);
      }
    );

    this.idProducto = '';
    this.cantidad = '';
  }
  Rechazar() {
    this.userService
      .modificarDona(
        this.Donaciones.id,
        this.Donaciones.descripcion_producto,
        '2'
      )
      .subscribe(
        (response) => {
          console.log('response', response);

          window.alert('Cambio la Donación a Rechazada');
          window.location.reload();
        },
        (error) => {
          console.log('error', error);
        }
      );
  }
  Pendiente() {
    this.userService
      .modificarDona(
        this.Donaciones.id,
        this.Donaciones.descripcion_producto,
        '1'
      )
      .subscribe(
        (response) => {
          console.log('response', response);

          window.alert('Cambio la Donación a Pendiente de Stock');

          window.location.reload();
        },
        (error) => {
          console.log('error', error);
        }
      );
  }
  resolver() {
    console.log(this.tabla);
    for (var i = 0; i < this.tabla.length; i += 1) {
      this.userService.listarStocksProductos(this.tabla[i].id).subscribe(
        (response) => {
          console.log('response', response);
          this.Stock = response;
          if (this.Stock.length === 0) {
            console.log('entro dentro del if');
            i = i - 1;
            this.userService
              .crearStock(
                this.tabla[i].cantidad,
                this.tabla[i].id,
                this.tabla[i].idcategoria
              )
              .subscribe(
                (response) => {
                  console.log('response', response);
                  this.userService.listarStocksProductos(response.id).subscribe(
                    (response) => {
                      console.log('response', response);
                      this.CreateStock = response;
                      this.userService
                        .modificarStock(
                          this.CreateStock[0].id,
                          this.tabla[i].cantidad
                        )
                        .subscribe(
                          (response) => {
                            console.log('response', response);
                          },
                          (error) => {
                            console.log('error', error);
                          }
                        );
                      this.userService
                        .crearMovimiento(
                          0,
                          this.Donaciones.id,
                          this.tabla[i].cantidad,
                          this.Stock[0].id
                        )
                        .subscribe(
                          (response) => {
                            console.log('response', response);
                          },
                          (error) => {
                            console.log('error', error);
                          }
                        );
                    },
                    (error) => {
                      console.log('error', error);
                    }
                  );
                },
                (error) => {
                  console.log('error', error);
                }
              );
          } else {
            i = i - 1;
            this.suma = this.tabla[i].cantidad + this.Stock[0].cantidad;
            console.log('sumaaaaaaaaaaaa2', this.Stock[0].cantidad);
            console.log('sumaaaaaaaaaaaa3', this.tabla[i].cantidad);
            console.log('sumaaaaaaaaaaaa4', this.suma);
            this.userService
              .modificarStock(this.Stock[0].id, this.suma)
              .subscribe(
                (response) => {
                  console.log('response', response);
                },
                (error) => {
                  console.log('error', error);
                }
              );
            this.userService
              .crearMovimiento(
                0,
                this.Donaciones.id,
                this.tabla[i].cantidad,
                this.Stock[0].id
              )
              .subscribe(
                (response) => {
                  console.log('response', response);
                },
                (error) => {
                  console.log('error', error);
                }
              );
          }
        },
        (error) => {
          console.log('error', error);
        }
      );
    }
    this.userService
      .modificarDona(
        this.Donaciones.id,
        this.Donaciones.descripcion_producto,
        '3'
      )
      .subscribe(
        (response) => {
          console.log('response', response);
          window.alert(
            'Se updateo a Aceptada la Donación: ' + this.Donaciones.id
          );

          window.location.reload();
        },
        (error) => {
          console.log('error', error);
        }
      );
  }
}
