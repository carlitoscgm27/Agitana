import { Component } from '@angular/core';
import { AuthService } from '../Servicios/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  rol: any;
  userTipo: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (this.rol == '') {
      this.rol = '';
    } else this.rol = this.authService.getAuthRol();
    if (this.userTipo == '') {
      this.userTipo = '';
    } else this.userTipo = this.authService.getAuthUserType();
  }
}
