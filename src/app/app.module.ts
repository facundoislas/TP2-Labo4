import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

// import { AccordionModule } from 'ngx-bootstrap';
// agrego las clases para utilizar ruteo
import { RouterModule, Routes } from '@angular/router';

import { MiHttpService } from './servicios/mi-http/mi-http.service'; 
import { PaisesService } from './servicios/paises.service'; 

import { JugadoresService } from './servicios/jugadores.service'; 
import{ ArchivosJugadoresService} from './servicios/archivos-jugadores.service'; 
import { ErrorComponent } from './componentes/error/error.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RuteandoModule } from './ruteando/ruteando.module';
import { ListadoComponent } from './componentes/listado/listado.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthService} from '../app/servicios/auth.service';

import {environment} from '../environments/environment';
// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';

import { JuegoServiceService } from './servicios/juego-service.service';
import { ListadosComponent } from './componentes/listados/listados.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { AgmCoreModule } from '@agm/core';
import { SexoPipe } from './pipes/sexo.pipe';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { AdminPageComponent } from './componentes/admin-page/admin-page.component';
import { ClientePageComponent } from './componentes/cliente-page/cliente-page.component';
import { RecepcionPageComponent } from './componentes/recepcion-page/recepcion-page.component';
import { EspecialistaPageComponent } from './componentes/especialista-page/especialista-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    JugadoresListadoComponent,
    SexoPipe,
    HomeComponent,
    FooterComponent,
    PiedraPapelTijeraComponent,
    TatetiComponent,
    AdminPageComponent,
    ClientePageComponent,
    RecepcionPageComponent,
    EspecialistaPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteandoModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    // NgbModule.forRoot(MiRuteo),
    // importo el ruteo
    // RouterModule.forRoot(MiRuteo)
  ],
  providers: [ JuegoServiceService, MiHttpService,PaisesService,ArchivosJugadoresService,JugadoresService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
