import { UserService } from '../Servicios/Service/user.service';
import { Component, HostListener } from '@angular/core';
import { PersonaTipoService } from '../Servicios/Service/persona-tipo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isScrolled = false;
  constructor(public userService: UserService,public personaTipo: PersonaTipoService) {}


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10; 

    const scrollBar = document.querySelector('.scroll-bar') as HTMLElement;
    if (scrollBar) {
      
      scrollBar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 + '%';
    }
  }
}
