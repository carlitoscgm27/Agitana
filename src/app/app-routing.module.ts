import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DonarComponent } from './donar/donar.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },

  { path: 'Inicio', component: InicioComponent },
  { path: 'Donar', component: DonarComponent },
  //{ path: 'contacto', component:  },
  //{ path: 'Login', component:  },
  //{ path: 'Register', component:  },

  { path: '**', component: ErrorPageComponent },
];
const routesAdmin: Routes = [
  // { path: '', redirectTo: '/Alta', pathMatch: 'full' },

  //{ path: 'Alta', component:  },
  //{ path: 'Control', component:  },
  //{ path: 'Donaciones', component:  },
  //{ path: 'Solicitud', component:  },
  //{ path: 'Perfil', component:  },

  { path: '**', component: ErrorPageComponent },
];
const routesDonante: Routes = [
  // { path: '', redirectTo: '/InicioDonante', pathMatch: 'full' },

  // { path: 'InicioDonante', component:  },
  // { path: 'Donar', component: DonarComponent },
  //{ path: 'Perfil', component:  },

  { path: '**', component: ErrorPageComponent },
];
const routesRecibidor: Routes = [
  // { path: '', redirectTo: '/InicioRecibidor', pathMatch: 'full' },

  // { path: 'InicioDonante', component:  },
  // { path: 'Recibir', component:  },
  //{ path: 'Perfil', component:  },

  { path: '**', component: ErrorPageComponent },
];
const user = '';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  comprobarUser(user: string) {
    if (user == 'admin') {
      routesAdmin;
    } else if (user == 'Donante') {
      routesDonante;
    } else if (user == 'Recibidor') {
      routesRecibidor;
    } else {
      routes;
    }
  }
}
function comprobarUser(user: any): Routes {
  throw new Error('Function not implemented.');
}
