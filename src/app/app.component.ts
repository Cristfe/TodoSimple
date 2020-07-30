import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaTareas: Tarea[];

  constructor() {
    this.listaTareas = []//new array
  }

  onTareaEnviada($event) {
    console.log($event);
    this.listaTareas.push($event);
  }
}
