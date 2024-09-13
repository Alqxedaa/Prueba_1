import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { EscanearQrComponent } from './escanear-qr/escanear-qr.component';
import { GenerarQrComponent } from './generar-qr/generar-qr.component';
import { PagesModule } from './pages.module';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'alumno', component:AlumnoComponent},
  {path:'docente', component:DocenteComponent},
  {path:'escanear-qr', component:EscanearQrComponent},
  {path:'generar-qr', component:GenerarQrComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,]
})
export class PagesRoutingModule { }
