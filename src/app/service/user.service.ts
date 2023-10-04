import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: string = 'Admin';

  constructor() { }

  // Método para obtener el usuario actual
  getCurrentUser(): boolean {
    
    if(this.user=='Admin'){
      console.log("entro en getCurrentUser")
      return true;
    }else if(this.user=='User'){
      console.log("entro en getCurrentUser")
      return true;
    }else
    return false;
  }
}
