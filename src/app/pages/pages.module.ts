import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { EscanearQrComponent } from './escanear-qr/escanear-qr.component';
import { GenerarQrComponent } from './generar-qr/generar-qr.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AlumnoComponent,
    DocenteComponent,
    EscanearQrComponent,
    GenerarQrComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    RouterLink
  ]
})
export class PagesModule { }
