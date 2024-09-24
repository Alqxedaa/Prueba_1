import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-docente',
  templateUrl: './seccion-docente.component.html',
  styleUrls: ['./seccion-docente.component.scss'],
})
export class SeccionDocenteComponent  implements OnInit {
  secciones: string[] = ['asdfads', 'Sección 2', 'Sección 3', 'Sección 4', 'Sección 5', 'Sección 6'];
  link: string = '/generar-qr';

  constructor() { }

  ngOnInit() {}

}
