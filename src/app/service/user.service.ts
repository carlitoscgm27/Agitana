import { PersonaTipoService } from './persona-tipo.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: string = '';

  constructor(private personaTipoService:PersonaTipoService) { }
  tipo = this.personaTipoService.persona;

  getCurrentUser(): boolean {
    
    if(this.user=='Admin'){
      console.log("entro en getCurrentUser")
      return true;
    }else if(this.user=='User' && this.tipo== 'Recibidor'){
      console.log("entro en getCurrentUser")
      return true;
    }else if(this.user=='User' && this.tipo== 'Donante'){
      console.log("entro en getCurrentUser")
      return true;
    }else
    return false;
  }
}
