import { AuthService } from 'src/app/Servicios/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private apiUrl = 'Admin/Stock/listar';

  constructor(private http: HttpClient, private authService: AuthService) {}

  //getData(): Observable<any> {
  // return this.authService.getWithBearerToken(this.apiUrl) 
 // }

}
