import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 const routes: Routes = [
//   { path: '', redirectTo: '/inicio', pathMatch: 'full' },
//   { path: 'inicio', component:  },
//   { path: 'acerca-de', component: },
//   { path: 'contacto', component:  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
