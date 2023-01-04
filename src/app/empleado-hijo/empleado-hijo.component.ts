import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  @Input() empleadoLista: Empleado;
  @Input() indice: number;

  constructor() {}

  ngOnInit(): void {

  }
  
  arrayCaracteristica = [''];

  agregarCaracteristicas(nuevaCaracteristica: string) {

    this.arrayCaracteristica.push(nuevaCaracteristica);

  }

}
