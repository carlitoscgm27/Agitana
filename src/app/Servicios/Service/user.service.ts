import { AuthService } from 'src/app/Servicios/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'Admin/Productos/listar';
  private authUrl = 'http://localhost:8080';
  private userUrl = 'User/Usuario/listar';
  private adminUrl = 'Admin/Usuario/listar';
  id:any;

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
    console.log("pene",this.id)

    return this.http.get(`${this.authUrl}/${this.userUrl}/${this.id}`, {
      withCredentials: true,
    });
  }
  comprobarAdmin(): Observable<any> {
    if (this.id == '') {
      this.id = '';
    } else this.id = this.authService.getAuthId();
    console.log("pene",this.id)
    return this.http.get(`${this.authUrl}/${this.adminUrl}/${this.id}`, {
      withCredentials: true,
    });
}
}
