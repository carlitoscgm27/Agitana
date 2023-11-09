import { AuthService } from 'src/app/Servicios/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authUrl = 'http://localhost:8080';
  private apiUrl = 'Admin/Productos/listar';
  private userUrl = 'User/Usuario/listar';
  private adminUrl = 'Admin/Usuario/listar';
  private donaUrl = 'Admin/Donaciones/listar';
  private solicitudUrl = 'Admin/Solicitudes/listar';


  private productoUrl = 'Admin/Productos/crear';
  private tipoUrl = 'Admin/Tipo/crear';
  private categoriaUrl = 'Admin/Categoria/crear';
  id: any;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getWithBearerToken(): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.apiUrl}`, {
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
}
