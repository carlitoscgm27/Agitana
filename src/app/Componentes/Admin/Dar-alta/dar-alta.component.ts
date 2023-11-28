import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Servicios/Service/user.service';


@Component({
  selector: 'app-dar-alta',
  templateUrl: './dar-alta.component.html',
  styleUrls: ['./dar-alta.component.css']
})

export class DarAltaComponent {
  constructor(private userService: UserService,  private router: Router) {}

  ngOnInit(): void {
    this.userService.comprobarAdmin().subscribe(
      (response) => {
        console.log('response', response);
       
      },
      (error) => {
        console.log('error', error);
            this.router.navigate(['../../403']).then(() => {
              window.location.href = '../../403';
            });
      }
    );
  }
}

