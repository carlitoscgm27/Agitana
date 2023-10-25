import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private usernameSource = new BehaviorSubject<string>('');
  currentUsername = this.usernameSource.asObservable();

  changeUsername(username: string) {
    this.usernameSource.next(username);
  }
}
