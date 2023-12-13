import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authUrl = 'http://localhost:8080';
  private ProUrl = 'Admin/Productos/listar';
  private cateUrl = 'Admin/Categoria/listar';
  private cateUrlUSER = 'User/Categoria/listar';
  private tiUrl = 'Admin/Tipo/listar';
  private stockUrl = 'Admin/Stock/listar';
  private userUrl = 'User/Usuario/listar';
  private adminUrl = 'Admin/Usuario/listar';
  private donaUrl = 'Admin/Donaciones/listar';
  private donaUrlPersona = 'User/Donaciones/listarDonacion';
  private solicitudUrl = 'Admin/Solicitudes/listar';
  private solicitudUrlPersona = 'User/Solicitudes/listarSolicitudes';
  private stockCate = 'Admin/Stock/listarCategoria';
  private MovStocklistar = 'Admin/Mov_Stock/listar';
  private stockPro = 'Admin/Stock/listarProducto';

  private productoUrl = 'Admin/Productos/crear';
  private tipoUrl = 'Admin/Tipo/crear';
  private categoriaUrl = 'Admin/Categoria/crear';
  private DonaUrlCREAR = 'User/Donaciones/crear';
  private SoliUrlCrear = 'User/Solicitudes/crear';
  private MovStockcreate = 'Admin/Mov_Stock/crear';
  private Stockcreate = 'Admin/Stock/crear';
  id: any;

  private stockModi = 'Admin/Stock/modificar';
  private SolicitudModi = 'Admin/Solicitudes/modificar';
  private DonacionModi = 'Admin/Donaciones/modificar';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProductos(): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.ProUrl}`, {
      withCredentials: true,
    });
  }
  getProductosId(id: number): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.ProUrl}/${id}`, {
      withCredentials: true,
    });
  }
  getCategoria(): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.cateUrl}`, {
      withCredentials: true,
    });
  }
  getCategoriaUSER(): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.cateUrlUSER}`, {
      withCredentials: true,
    });
  }
  getTipo(): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.tiUrl}`, {
      withCredentials: true,
    });
  }
  getStock(): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.stockUrl}`, {
      withCredentials: true,
    });
  }

  comprobarUser(): Observable<any> {
    if (this.id == '') {
      this.id = '';
    } else this.id = this.authService.getAuthId();

    return this.http.get(`${this.authUrl}/${this.userUrl}/${this.id}`, {
      withCredentials: true,
    });
  }
  comprobarAdmin(): Observable<any> {
    if (this.id == '') {
      this.id = '';
    } else this.id = this.authService.getAuthId();

    return this.http.get(`${this.authUrl}/${this.adminUrl}/${this.id}`, {
      withCredentials: true,
    });
  }
  listarDonacion(): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.donaUrl}`, {
      withCredentials: true,
    });
  }
  listarSolicitudes(): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.solicitudUrl}`, {
      withCredentials: true,
    });
  }
  listarSolicitudesId(id: Number): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.solicitudUrl}/${id}`, {
      withCredentials: true,
    });
  }
  listarDonacionesId(id: Number): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.donaUrl}/${id}`, {
      withCredentials: true,
    });
  }
  listarStocksCategoria(id: Number): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.stockCate}/${id}`, {
      withCredentials: true,
    });
  }
  listaDonacionPersona(id: Number): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.donaUrlPersona}/${id}`, {
      withCredentials: true,
    });
  }

  listaSolicitudPersona(id: Number): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.solicitudUrlPersona}/${id}`, {
      withCredentials: true,
    });
  }
  listarMov_Stock(): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.MovStocklistar}`, {
      withCredentials: true,
    });
  }
  listarStocksProductos(id: Number): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.stockPro}/${id}`, {
      withCredentials: true,
    });
  }
  crearProducto(
    nombre: string,
    idcate: BigInteger,
    idtipo: BigInteger
  ): Observable<any> {
    const credentials = {
      nombre: nombre,
      categoriaDTO: {
        id: idcate,
      },
      tipoDTO: {
        id: idtipo,
      },
    };

    console.log(credentials);
    return this.http.post(`${this.authUrl}/${this.productoUrl}`, credentials);
  }
  crearTipo(nombre: string): Observable<any> {
    const credentials = {
      nombre: nombre,
    };

    console.log(credentials);
    return this.http.post(`${this.authUrl}/${this.tipoUrl}`, credentials);
  }
  crearCategoria(nombre: string, descripcion: string): Observable<any> {
    const credentials = {
      nombre: nombre,
      descripcion: descripcion,
    };

    console.log(credentials);
    return this.http.post(`${this.authUrl}/${this.categoriaUrl}`, credentials);
  }

  crearDonacion(
    idcategoria: BigInteger,
    descripcion_producto: string,
    idPersona: BigInteger
  ): Observable<any> {
    const credentials = {
      categoriaDTO: {
        id: idcategoria,
      },
      descripcion_producto: descripcion_producto,
      personaDTO: {
        id: idPersona,
      },
      estado: 0,
    };
    console.log(credentials);
    return this.http.post(`${this.authUrl}/${this.DonaUrlCREAR}`, credentials);
  }
  crearSolicitud(
    idcategoria: BigInteger,
    idPersona: BigInteger
  ): Observable<any> {
    const credentials = {
      categoriaDTO: {
        id: idcategoria,
      },
      almacenDTO: {
        id: 1,
      },
      personaDTO: {
        id: idPersona,
      },
      estado: 0,
    };
    console.log(credentials);
    return this.http.post(`${this.authUrl}/${this.SoliUrlCrear}`, credentials);
  }

  crearMovimiento(
    idSolicitud: any,
    idDonacion: any,
    cantidad: BigInteger,
    idStock: any
  ): Observable<any> {
    const credentials = {
      solicitudesDTO: {
        id: idSolicitud,
      },
      stockDTO: {
        id: idStock,
      },
      donacionDTO: {
        id: idDonacion,
      },
      cantidad: cantidad,
    };
    console.log('credentialsssssssssss', credentials);
    return this.http.post(
      `${this.authUrl}/${this.MovStockcreate}`,
      credentials
    );
  }
  crearStock(
    cantidad: BigInteger,
    idproducto: any,
    idcategoria: any
  ): Observable<any> {
    const credentials = {
      cantidad: cantidad,
      productoDTO: {
        id: idproducto,
      },
      categoriaDTO: {
        id: idcategoria,
      },
      almacenDTO: {
        id: 1,
      },
    };

    console.log(credentials);
    return this.http.post(`${this.authUrl}/${this.Stockcreate}`, credentials);
  }

  modificarStock(id: any, cantidadFinal: BigInteger): Observable<any> {
    const credentials = {
      id: id,
      cantidad: cantidadFinal,
    };
    console.log(credentials);
    return this.http.put(`${this.authUrl}/${this.stockModi}`, credentials);
  }
  modificarSoli(id: any, estado: any): Observable<any> {
    const credentials = {
      id: id,
      estado: estado,
    };
    console.log(credentials);
    return this.http.put(`${this.authUrl}/${this.SolicitudModi}`, credentials);
  }
  modificarDona(id: any, estado: any): Observable<any> {
    const credentials = {
      id: id,
      estado: estado,
    };
    console.log(credentials);
    return this.http.put(`${this.authUrl}/${this.DonacionModi}`, credentials);
  }
}
