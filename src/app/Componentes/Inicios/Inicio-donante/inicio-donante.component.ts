import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Servicios/Service/user.service';

@Component({
  selector: 'app-inicio-donante',
  templateUrl: './inicio-donante.component.html',
  styleUrls: ['./inicio-donante.component.css']
})
export class InicioDonanteComponent {

  constructor(private userService: UserService,  private router: Router) {}

  ngOnInit(): void {
    this.userService.comprobarUser().subscribe(
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
