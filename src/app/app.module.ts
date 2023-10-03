import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicios/inicio/inicio.component';
import { DonarComponent } from './donar/donar.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { UserService } from './service/user.service';
import { PersonaTipoService } from './service/persona-tipo.service';
import { InicioDonanteComponent } from './inicios/inicio-donante/inicio-donante.component';
import { InicioRecibidorComponent } from './inicios/inicio-recibidor/inicio-recibidor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    DonarComponent,
    FooterComponent,
    ErrorPageComponent,

    InicioDonanteComponent,
    InicioRecibidorComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    PersonaTipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
