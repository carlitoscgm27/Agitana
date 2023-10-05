import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { InicioComponent } from './Componentes/Inicios/Inicio/inicio.component';
import { DonarComponent } from './Componentes/Funciones/Donar/donar.component';
import { FooterComponent } from './Footer/footer.component';
import { ErrorPageComponent } from './Error-page/error-page.component';
import { LoginComponent } from './Usuario/login/login.component';
import { RegistroComponent } from './Usuario/registro/registro.component';

import { UserService } from './Servicios/Service/user.service';
import { PersonaTipoService } from './Servicios/Service/persona-tipo.service';
import { InicioDonanteComponent } from './Componentes/Inicios/Inicio-donante/inicio-donante.component';
import { InicioRecibidorComponent } from './Componentes/Inicios/Inicio-recibidor/inicio-recibidor.component';
import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    DonarComponent,
    FooterComponent,
    ErrorPageComponent,
    LoginComponent,
    RegistroComponent,
    InicioDonanteComponent,
    InicioRecibidorComponent,
    PruebaComponent


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
