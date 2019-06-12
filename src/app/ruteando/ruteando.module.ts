import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { ListadoComponent } from'../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { HomeComponent } from '../componentes/home/home.component';
import { PiedraPapelTijeraComponent } from '../componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';
import { TatetiComponent } from '../componentes/tateti/tateti.component';
import { AdminPageComponent } from '../componentes/admin-page/admin-page.component';
import { ClientePageComponent } from '../componentes/cliente-page/cliente-page.component';
import { EspecialistaPageComponent } from '../componentes/especialista-page/especialista-page.component';
import { RecepcionPageComponent } from '../componentes/recepcion-page/recepcion-page.component';

// declaro donde quiero que se dirija
const MiRuteo = [
{path: 'Jugadores' , component: JugadoresListadoComponent},
{path: 'Listado' , component: ListadoComponent},

{ path: 'Juegos' ,
component: JuegosComponent ,
children:
     [{path: '' , component: MenuCardComponent},
      {path: 'Agilidad' , component: AgilidadAritmeticaComponent},
      {path: 'Anagrama' , component: AnagramaComponent},
      {path: 'PiedraPapelTijera' , component: PiedraPapelTijeraComponent},
      {path: 'Tateti' , component: TatetiComponent}]
},
{path: 'QuienSoy' , component: QuienSoyComponent},
{path: 'Registro' , component: RegistroComponent},
{path: '' , component: LoginComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Admin' , component: AdminPageComponent},
{path: 'Cliente' , component: ClientePageComponent},
{path: 'Recepcion' , component: RecepcionPageComponent},
{path: 'Especialista' , component: EspecialistaPageComponent},
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
