import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10; 

    const scrollBar = document.querySelector('.scroll-bar') as HTMLElement;
    if (scrollBar) {
      
      scrollBar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 + '%';
    }
  }
}
