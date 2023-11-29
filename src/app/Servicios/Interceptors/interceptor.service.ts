import { AuthService } from '../auth.service';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('paso por el intepceptor');
    const token = this.authService.Token;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    const reqClone = req.clone({
      headers,
    });

    return next.handle(reqClone);
  }
}
