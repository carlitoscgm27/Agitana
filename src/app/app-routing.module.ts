import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DonarComponent } from './donar/donar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserService } from './service/user.service';

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
  //{ path: 'Perfil/?id', component:  },

  { path: '**', component: ErrorPageComponent },
];
const routesDonanteRecibidor: Routes = [
  // { path: '', redirectTo: '/InicioDonante', pathMatch: 'full' },

  // { path: 'InicioDonante', component:  },
  // { path: 'Donar', component: DonarComponent },
  //{ path: 'Perfil/?id', component:  },

  { path: '**', component: ErrorPageComponent },
];

const user = 'admin';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  router: any;
  constructor(private userService: UserService) {}

  ngOnInit() {
    const user = this.userService.user;

    
    let selectedRoutes: Routes;

    if (user === 'admin') {
      selectedRoutes = routesAdmin;
    } else if (user === 'Donante') {
      selectedRoutes = routesDonanteRecibidor;
    } else {
      selectedRoutes = routes;
    }

    
    this.router.resetConfig(selectedRoutes);
  }
}