import { UserService } from '../Servicios/Service/user.service';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isScrolled = false;
  rol: any;
  userTipo: any;
  nombre: any;
  constructor(
    public userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.rol == '') {
      this.rol = '';
    } else this.rol = this.authService.getAuthRol();
    if (this.userTipo == '') {
      this.userTipo = '';
    } else this.userTipo = this.authService.getAuthUserType();
    if (this.nombre == '') {
      this.nombre = '';
    } else this.nombre = this.authService.getAuthNombre();
  }

  logout() {
    this.authService.removeAuthToken();
    this.authService.removeAuthRol();
    this.authService.removeAuthUserType();
    this.authService.removeAuthNombre();
    this.authService.removeAuthId();
    this.router.navigate(['../']).then(() => {
      window.location.href = '../';
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;

    const scrollBar = document.querySelector('.scroll-bar') as HTMLElement;
    if (scrollBar) {
      scrollBar.style.width =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100 +
        '%';
    }
  }
}
