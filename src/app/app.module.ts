import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { InicioComponent } from './Componentes/Inicios/Inicio/inicio.component';
import { DonarComponent } from './Componentes/Funciones/Donar/donar.component';
import { FooterComponent } from './Footer/footer.component';
import { ErrorPageComponent } from './Error-page/error-page.component';
import { LoginComponent } from './Usuario/Login/login.component';
import { RegistroComponent } from './Usuario/Registro/registro.component';

import { AuthService } from './Servicios/auth.service';
import { UserService } from './Servicios/Service/user.service';
import { InicioDonanteComponent } from './Componentes/Inicios/Inicio-donante/inicio-donante.component';
import { InicioRecibidorComponent } from './Componentes/Inicios/Inicio-recibidor/inicio-recibidor.component';
import { PruebaComponent } from './prueba/prueba.component';
import { DarAltaComponent } from './Componentes/Admin/Dar-alta/dar-alta.component';
import { DonacionesComponent } from './Componentes/Admin/Donaciones/donaciones.component';
import { SolicitudesComponent } from './Componentes/Admin/Solicitudes/solicitudes.component';
import { ControlComponent } from './Componentes/Admin/Control/control.component';
import { ProductosComponent } from './Componentes/Admin/Dar-alta/Productos/productos.component';
import { CategoriaComponent } from './Componentes/Admin/Dar-alta/Categoria/categoria.component';
import { TipoComponent } from './Componentes/Admin/Dar-alta/Tipo/tipo.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './Servicios/Interceptors/interceptor.service';
import { Error403PageComponent } from './Error403-page/error403-page.component';
import { SolicitudComponent } from './Componentes/Funciones/Solicitud/solicitud.component';
import { PopUpComponent } from './Componentes/Funciones/PopUp/pop-up.component';

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
    PruebaComponent,
    DarAltaComponent,
    DonacionesComponent,
    SolicitudesComponent,
    ControlComponent,
    ProductosComponent,
    CategoriaComponent,
    TipoComponent,
    Error403PageComponent,
    SolicitudComponent,
    PopUpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    UserService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
