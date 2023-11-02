import { Router } from '@angular/router';
import { UserService } from './../../../Servicios/Service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  responseData: any[] = [];

  constructor(private userService: UserService,private router: Router ) {}

  ngOnInit(): void {
    this.userService.getWithBearerToken().subscribe(
      (response) => {
        console.log('response', response);
        this.responseData = response;
      },
      (error) => {
        console.log('error', error);
      }
    );

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
