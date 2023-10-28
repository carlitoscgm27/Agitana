import { UserService } from './../../../Servicios/Service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  responseData: any[] = []; // Declaración de un array para almacenar datos

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getWithBearerToken().subscribe(
      (response) => {
        console.log('response', response);
        this.responseData = response; // Almacena los datos en el array
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
