import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DonarComponent } from './donar/donar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserService } from './service/user.service';
import { PersonaTipoService } from './service/persona-tipo.service';

const routes: Routes = [
  { path: 'OngSafa', redirectTo: 'OngSafa/Inicio', pathMatch: 'full' },

  { path: 'OngSafa/Inicio', component: InicioComponent },
  { path: 'OngSafa/Donar', component: DonarComponent },
  //{ path: 'contacto', component:  },
  //{ path: 'OngSafa/Login', component:  },
  //{ path: 'OngSafa/Register', component:  },

  { path: '**', component: ErrorPageComponent },
];
const routesAdmin: Routes = [
  // { path: 'OngSafa', redirectTo: 'OngSafa/Alta', pathMatch: 'full' },

  //{ path: 'OngSafa/Alta', component:  },
  //{ path: 'OngSafa/Control', component:  },
  //{ path: 'OngSafa/Donaciones', component:  },
  //{ path: 'OngSafa/Solicitud', component:  },
  //{ path: 'OngSafa/Perfil/?id', component:  },

  { path: '**', component: ErrorPageComponent },
];
const routesDonante: Routes = [
  // { path: 'OngSafa', redirectTo: 'OngSafa/InicioDonante', pathMatch: 'full' },

  // { path: 'OngSafa/InicioDonante', component:  },
  // { path: 'OngSafa/InicioRecibidor', component:  },
  // { path: 'OngSafa/Donar', component: DonarComponent },
  // { path: 'OngSafa/Recibir', component: DonarComponent },
  //{ path: 'OngSafa/Perfil/?id', component:  },

  { path: '**', component: ErrorPageComponent },
];
const routesRecibidor: Routes = [
  // { path: 'OngSafa', redirectTo: 'OngSafa/InicioDRecibidor', pathMatch: 'full' },

  // { path: 'OngSafa/InicioRecibidor', component:  },
  // { path: 'OngSafa/Recibir', component: DonarComponent },
  //{ path: 'OngSafa/Perfil/?id', component:  },

  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  router: any;
  constructor(private userService: UserService,public personaTipo: PersonaTipoService) {}

  ngOnInit() {
    const user = this.userService.user;
    const persona = this.personaTipo.persona;
    
    let selectedRoutes: Routes;

    if (user === 'admin') {
      selectedRoutes = routesAdmin;
    }
    if (persona === 'Donante') {
      selectedRoutes = routesDonante;
    } else if (persona === 'Recibidor') {
      selectedRoutes = routesRecibidor;
    } else { 
      selectedRoutes = routes;
    }

    
    this.router.resetConfig(selectedRoutes);
  }
}