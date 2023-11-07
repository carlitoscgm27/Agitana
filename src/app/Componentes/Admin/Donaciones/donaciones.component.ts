import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Servicios/Service/user.service';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css'],
})
export class DonacionesComponent {
  responseData: any[] = [];

  constructor(private userService: UserService,  private router: Router) {}

  ngOnInit(): void {
    this.userService.listarDonacion().subscribe(
      (response) => {
        console.log('response', response);
        this.responseData = response;
        
      },
      (error) => {
        console.log('error', error);
            this.router.navigate(['../../403']).then(() => {
              window.location.href = '../../403';
            });
      }
    );
  }
  
  borrarDonacion(id: number): void {
    window.alert('Has eliminado el numero: ' + id);
  }

  aceptarDonacion(id: number): void {
    window.alert('Has Aceptado el numero: ' + id);
  }
  
}
