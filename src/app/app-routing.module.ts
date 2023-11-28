import { Tipo } from './Jsons/Tipo';
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
import { Error403PageComponent } from './Error403-page/error403-page.component';
import { SolicitudComponent } from './Componentes/Funciones/Solicitud/solicitud.component';
import { PerfilComponent } from './Componentes/Funciones/Perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'OngSafa/Inicio', pathMatch: 'full' },
  { path: 'OngSafa/Inicio', component: InicioComponent },
  { path: 'OngSafa/Donar', component: DonarComponent },
  { path: '403', component: Error403PageComponent },
  //{ path: 'contacto', component:  },
  { path: 'OngSafa/Login', component: LoginComponent },
  { path: 'OngSafa/Register', component: RegistroComponent },

  //Admin

  {
    path: '',
    data: { rol: 'ADMIN' },
    redirectTo: 'Admin/Alta',
    pathMatch: 'full',
  },

  {
    path: 'Admin/Alta',
    data: { rol: 'ADMIN' },
    canActivate: [roleGuardGuard],
    component: DarAltaComponent,
  },
  {
    path: 'Admin/Control',
    data: { rol: 'ADMIN' },
    canActivate: [roleGuardGuard],
    component: ControlComponent,
  },
  {
    path: 'Admin/Donaciones',
    data: { rol: 'ADMIN' },
    canActivate: [roleGuardGuard],
    component: DonacionesComponent,
  },
  {
    path: 'Admin/Solicitudes',
    data: { rol: 'ADMIN' },
    canActivate: [roleGuardGuard],
    component: SolicitudesComponent,
  },
  { path: 'Admin/Perfil',data:{rol:'ADMIN'},canActivate:[roleGuardGuard], component:  PerfilComponent},

  {
    path: '',
    data: { rol: 'USER', tipo: 'DONANTE' },
    redirectTo: 'User/InicioDonante',
    pathMatch: 'full',
  },

  {
    path: 'User/InicioDonante',
    data: { rol: 'USER', tipo: 'DONANTE' },
    canActivate: [roleGuardGuard],
    component: InicioDonanteComponent,
  },
  {
    path: 'User/Donar',
    data: { rol: 'USER', tipo: 'DONANTE' },
    canActivate: [roleGuardGuard],
    component: DonarComponent,
  },
  { path: 'User/Perfil',data:{rol:'USER',tipo:'DONANTE'},canActivate:[roleGuardGuard], component:  PerfilComponent},
  //Recibidor

  {
    path: '',
    data: { rol: 'USER', tipo: 'RECIBIDOR' },
    redirectTo: 'User/InicioRecibidor',
    pathMatch: 'full',
  },

  {
    path: 'User/InicioRecibidor',
    data: { rol: 'USER', tipo: 'RECIBIDOR' },
    canActivate: [roleGuardGuard],
    component: InicioRecibidorComponent,
  },
  {
    path: 'User/Solicitud',
    data: { rol: 'USER', tipo: 'RECIBIDOR' },
    canActivate: [roleGuardGuard],
    component: SolicitudComponent,
  },
  { path: 'User/Perfil',data:{rol:'USER',tipo:'RECIBIDOR'},canActivate:[roleGuardGuard], component: PerfilComponent },
  
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  router: any;
  constructor(private userService: UserService) {}
}
