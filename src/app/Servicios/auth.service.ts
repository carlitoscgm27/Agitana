import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'http://localhost:8080/auth';
  private authToken: string | null = null;
  private rol: string | null = "";
  constructor(private http: HttpClient) {
    this.authToken = localStorage.getItem('authToken');
  }

  login(username: string, password: string): Observable<any> {
    const credentials = {
      username: username,
      password: password,
    };
console.log(credentials)
    return this.http.post(`${this.authUrl}/login`, credentials);
  }
  logoutS(): Observable<any> {
    return this.http.get(`${this.authUrl}/logout`);
  }


  setAuthToken(token: string) {
    this.authToken = token;
    localStorage.setItem('authToken', token);
  }
  setAuthRol(rol: string) {
    this.rol = rol;
    localStorage.setItem('rol', rol);
  }

  getAuthToken(): string | null {
    if (!this.authToken) {
      this.authToken = localStorage.getItem('authToken');
    }
    return this.authToken;
  }
  getAuthRol(): string | null {
    if (!this.rol) {
      this.rol = localStorage.getItem('rol');
    }
    return this.rol;
  }
  removeAuthToken() {
    this.authToken = null;
    localStorage.removeItem('authToken');
  }

  removeAuthRol() {
    this.rol = null;
    localStorage.removeItem('rol');
  }

  checkCurrentRol(): boolean {
    console.log("entraaaaaa")
    if (!this.rol) {
      this.rol = localStorage.getItem('rol');
    }
    this.rol;
    console.log(this.rol)
    if (this.rol) {
      if (this.rol == 'Admin') {
        console.log('Usuario Admin');
        return true;
      } else if (
        this.rol == 'User') {
        console.log('Usuario User con tipo Recibidor o Donante');
        return true;
      }else
    

    console.log('Usuario no autorizado 1');
    return false;
  }
  console.log('Usuario no autorizado 2');
    return false;
  }

}
