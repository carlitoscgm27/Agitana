import { UserService } from './../../../Servicios/Service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {

  constructor(private userService: UserService) {}


  ngOnInit(): void {
   // this.userService.getData().subscribe((data) => {
  //    console.log(data);
 //   });
  }

}
