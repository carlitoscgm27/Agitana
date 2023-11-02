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

  constructor(private http: HttpClient, private authService: AuthService) {}

  getWithBearerToken(): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.apiUrl}`, {
      withCredentials: true,
    });
  }

  comprobarUser(): Observable<any> {
    return this.http.get(`${this.authUrl}/${this.userUrl}`, {
      withCredentials: true,
    });
  }
}
