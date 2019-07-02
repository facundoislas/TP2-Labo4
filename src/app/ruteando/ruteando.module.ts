import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { HomeComponent } from '../componentes/home/home.component';
import { AdminPageComponent } from '../componentes/admin-page/admin-page.component';
import { ClientePageComponent } from '../componentes/cliente-page/cliente-page.component';
import { EspecialistaPageComponent } from '../componentes/especialista-page/especialista-page.component';
import { RecepcionPageComponent } from '../componentes/recepcion-page/recepcion-page.component';
import {AltaAdminComponent} from './../componentes/alta-admin/alta-admin.component';
import {TurnosClienteComponent} from './../componentes/turnos-cliente/turnos-cliente.component';
import { ListaTurnosClienteComponent } from './../componentes/lista-turnos-cliente/lista-turnos-cliente.component'
import {TurnosRecepcionComponent} from './../componentes/turnos-recepcion/turnos-recepcion.component'
import {AltaTurnoRecepcionComponent} from './../componentes/alta-turno-recepcion/alta-turno-recepcion.component';
import { TurnosEspecialistaComponent } from './../componentes/turnos-especialista/turnos-especialista.component'

// declaro donde quiero que se dirija
const MiRuteo = [
{path: 'QuienSoy' , component: QuienSoyComponent},
{path: 'Registro' , component: RegistroComponent},
{path: '' , component: LoginComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Admin' , component: AdminPageComponent},
{path: 'AltaAdmin', component: AltaAdminComponent},
{path: 'Cliente' , component: ClientePageComponent},
{path: 'pedirTurno', component: TurnosClienteComponent},
{path: 'ListaTurnos', component: ListaTurnosClienteComponent},
{path: 'Recepcion' , component: RecepcionPageComponent},
{path: 'Especialista' , component: EspecialistaPageComponent},
{path: 'TurnosRecepcion', component: TurnosRecepcionComponent},
{path: 'AltaTurnoRecepcion', component: AltaTurnoRecepcionComponent},
{path: 'turnosEspecialista', component: TurnosEspecialistaComponent},
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
