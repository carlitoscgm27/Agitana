import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DonarComponent } from './donar/donar.component';
import { ErrorPageComponent } from './error-page/error-page.component';

 const routes: Routes = [
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
  
  { path: 'Inicio', component: InicioComponent },
  { path: 'Donar', component: DonarComponent },
//   { path: 'contacto', component:  },


{ path: '**', component:  ErrorPageComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
