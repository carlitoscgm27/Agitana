import { Component } from '@angular/core';
import { UserService } from '../../../Servicios/Service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent {
  responseData: any[] = [];
  isVisible: boolean = true;
  movimientos: any;

  a:any;
  constructor(private userService: UserService, private router: Router) {}


  ngOnInit(): void {
    this.userService.listarMov_Stock().subscribe(
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
}


