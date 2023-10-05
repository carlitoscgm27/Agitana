import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicios/inicio/inicio.component';
import { DonarComponent } from './donar/donar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserService } from './service/user.service';
import { PersonaTipoService } from './service/persona-tipo.service';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { roleGuardGuard } from './guard/role-guard.guard';
import { PruebaComponent } from './prueba/prueba.component';
import { InicioDonanteComponent } from './inicios/inicio-donante/inicio-donante.component';
import { InicioRecibidorComponent } from './inicios/inicio-recibidor/inicio-recibidor.component';

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
    component: PruebaComponent,
  },
  // { path: 'User', redirectTo: 'User/InicioDonante', pathMatch: 'full',data:{rol:'Admin'},canActivate:[roleGuardGuard], component:  PruebaComponent },
  //{ path: 'Admin/Control',data:{rol:'Admin'},canActivate:[roleGuardGuard], component:  },
  //{ path: 'Admin/Donaciones,data:{rol:'Admin'},canActivate:[roleGuardGuard]', component:  },
  //{ path: 'Admin/Solicitud',data:{rol:'Admin'},canActivate:[roleGuardGuard], component:  },
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
  // { path: 'User/Donar',data:{rol:'User',tipo:'Donante'},canActivate:[roleGuardGuard], component: DonarComponent },
  // { path: 'User/Recibir',data:{rol:'User',tipo:'Donante'},canActivate:[roleGuardGuard], component: DonarComponent },
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
  // { path: 'User/Recibir',data:{rol:'User',rol:'Recibidor'},canActivate:[roleGuardGuard], component: DonarComponent },
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
    public personaTipo: PersonaTipoService
  ) {}
}
