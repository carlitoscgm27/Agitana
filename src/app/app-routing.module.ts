import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/Inicios/Inicio/inicio.component';
import { DonarComponent } from './Componentes/Funciones/Donar/donar.component';
import { ErrorPageComponent } from './Error-page/error-page.component';
import { UserService } from './Servicios/Service/user.service';
import { LoginComponent } from './Usuario/Login/login.component';
import { RegistroComponent } from './Usuario/Registro/registro.component';
import { roleGuardGuard } from './Servicios/Guard/role-guard.guard';
import { PruebaComponent } from './prueba/prueba.component';
import { InicioDonanteComponent } from './Componentes/Inicios/Inicio-donante/inicio-donante.component';
import { InicioRecibidorComponent } from './Componentes/Inicios/Inicio-recibidor/inicio-recibidor.component';
import { DonacionesComponent } from './Componentes/Admin/Donaciones/donaciones.component';
import { SolicitudesComponent } from './Componentes/Admin/Solicitudes/solicitudes.component';
import { ControlComponent } from './Componentes/Admin/Control/control.component';
import { DarAltaComponent } from './Componentes/Admin/Dar-alta/dar-alta.component';

const routes: Routes = [
  { path: '', redirectTo: 'OngSafa/Inicio', pathMatch: 'full' },
  { path: 'OngSafa/Inicio', component: InicioComponent },
  { path: 'OngSafa/Donar', component: DonarComponent },
  //{ path: 'contacto', component:  },
  { path: 'OngSafa/Login', component: LoginComponent },
  { path: 'OngSafa/Register', component: RegistroComponent },

  //Admin

  {
    path: '',
    data: { rol: 'Admin' },
    redirectTo: 'Admin/Alta',
    pathMatch: 'full',
  },

  {
    path: 'Admin/Alta',
    data: { rol: 'Admin' },
    canActivate: [roleGuardGuard],
    component: DarAltaComponent,
  },
  {
    path: 'Admin/Control',
    data: { rol: 'Admin' },
    canActivate: [roleGuardGuard],
    component: ControlComponent,
  },
  {
    path: 'Admin/Donaciones',
    data: { rol: 'Admin' },
    canActivate: [roleGuardGuard],
    component: DonacionesComponent,
  },
  {
    path: 'Admin/Solicitudes',
    data: { rol: 'Admin' },
    canActivate: [roleGuardGuard],
    component: SolicitudesComponent,
  },
  //{ path: 'Admin/Perfil/?id',data:{rol:'Admin'},canActivate:[roleGuardGuard], component:  },

  //Doanante

  {
    path: '',
    data: { rol: 'User', tipo: 'Donante' },
    redirectTo: 'User/InicioDonante',
    pathMatch: 'full',
  },

  {
    path: 'User/InicioDonante',
    data: { rol: 'User', tipo: 'Donante' },
    canActivate: [roleGuardGuard],
    component: InicioDonanteComponent,
  },
  { path: 'User/Donar',data:{rol:'User',tipo:'Donante'},canActivate:[roleGuardGuard], component: DonarComponent },
  //{ path: 'User/Perfil/?id',data:{rol:'User',tipo:'Donante'},canActivate:[roleGuardGuard], component:  },

  //Recibidor

  {
    path: '',
    data: { rol: 'User', tipo: 'Recibidor' },
    redirectTo: 'User/InicioRecibidor',
    pathMatch: 'full',
  },

  {
    path: 'User/InicioRecibidor',
    data: { rol: 'User', tipo: 'Recibidor' },
    canActivate: [roleGuardGuard],
    component: InicioRecibidorComponent,
  },
  // { path: 'User/Recibir',data:{rol:'User',rol:'Recibidor'},canActivate:[roleGuardGuard], component: RecibirComponent },
  //{ path: 'User/Perfil/?id',data:{rol:'User',rol:'Recibidor'},canActivate:[roleGuardGuard], component:  },

  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  router: any;
  constructor(
    private userService: UserService,
  ) {}
}
