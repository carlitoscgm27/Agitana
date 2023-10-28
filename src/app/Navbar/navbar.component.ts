import { UserService } from '../Servicios/Service/user.service';
import { Component, HostListener } from '@angular/core';
import { PersonaTipoService } from '../Servicios/Service/persona-tipo.service';
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
  constructor(
    public userService: UserService,
    public personaTipo: PersonaTipoService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.rol == '') {
      this.rol = '';
    } else this.rol = this.authService.getAuthRol();
  }

  logout() {
    this.authService.removeAuthToken();
    this.authService.removeAuthRol();
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
