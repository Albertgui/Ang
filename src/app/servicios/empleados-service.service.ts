import { Injectable } from '@angular/core';
import { Empleado } from '../empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

  constructor() { }

  empleados: Empleado[] = [

    new Empleado("Albert", "Guillermo", "Presidente", 200),
    new Empleado("Salvador", "Villa", "Vice-presidente", 150),
    new Empleado("José", "Pita", "Programador", 120),
    new Empleado("Kevin", "Sanchez", "Asistente", 80),
    new Empleado("Santiago", "Rada", "Asistente del asistente", 50)

  ];

  agregarEmpSer(empleado: Empleado) {

    this.empleados.push(empleado);

  }

}
