import { Component } from '@angular/core';
import { Alumno } from '../app/entitys/alumno';
import { Especializacion } from '../app/entitys/Especializacion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP-DESIBO-2018';

  alumno:Alumno;
  especializacion:Especializacion;

  constructor(){
    
  }


}
