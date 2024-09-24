import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-alumno',
  templateUrl: './seccion-alumno.component.html',
  styleUrls: ['./seccion-alumno.component.scss'],
})
export class SeccionAlumnoComponent  implements OnInit {
  secciones: string[] = ['asdfads', 'Sección 2', 'Sección 3', 'Sección 4', 'Sección 5', 'Sección 6'];
  link: string = '/escanear-qr';


  constructor() { }

  ngOnInit() {}

}
