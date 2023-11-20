import { AuthService } from 'src/app/Servicios/auth.service';
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
  private solicitudUrl = 'Admin/Solicitudes/listar';




  private productoUrl = 'Admin/Productos/crear';
  private tipoUrl = 'Admin/Tipo/crear';
  private categoriaUrl = 'Admin/Categoria/crear';
  private DonaUrlCREAR = 'User/Donaciones/crear';
  private SoliUrlCrear = 'User/Solicitudes/crear';
  id: any;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProductos(): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.ProUrl}`, {
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
  listarSolicitudesId(id:Number): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.solicitudUrl}/${id}`, {
      withCredentials: true,
    });
  }
  listarDonacionesId(id:Number): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.donaUrl}/${id}`, {
      withCredentials: true,
    });
  }
  crearProducto(nombre: string, idcate: BigInteger, idtipo: BigInteger): Observable<any> {
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
  crearCategoria(nombre: string, descripcion: string,): Observable<any> {
    const credentials = {
      nombre: nombre,
      descripcion: descripcion,
    };

    console.log(credentials);
    return this.http.post(`${this.authUrl}/${this.categoriaUrl}`, credentials);
  }

  crearDonacion(idcategoria: BigInteger, descripcion_producto:string,idPersona:BigInteger): Observable<any> {
    const credentials = {
      categoriaDTO:{
        id: idcategoria
      },
      descripcion_producto: descripcion_producto,
      personaDTO:{
        id:idPersona
      },
      estado:0,
    };
    console.log(credentials)
    return this.http.post(`${this.authUrl}/${this.DonaUrlCREAR}`, credentials);
  }
  crearSolicitud(idcategoria: BigInteger,idPersona:BigInteger): Observable<any> {
    const credentials = {
      categoriaDTO:{
        id: idcategoria
      },
      almacenDTO:{
        id:1
      }, 
      personaDTO:{
        id:idPersona
      },
      estado:0,
    };
    console.log(credentials)
    return this.http.post(`${this.authUrl}/${this.SoliUrlCrear}`, credentials);
  }
}
