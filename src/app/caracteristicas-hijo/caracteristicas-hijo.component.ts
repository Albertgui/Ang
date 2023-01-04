import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from "../servicios/servicio-empleados.service";

@Component({
  selector: 'app-caracteristicas-hijo',
  templateUrl: './caracteristicas-hijo.component.html',
  styleUrls: ['./caracteristicas-hijo.component.css']
})
export class CaracteristicasHijoComponent implements OnInit{

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregarCaracteristicas(value: string) {

    this.servicio.muestraMensaje(value);
    this.caracteristicasEmpleados.emit(value);


  }

  constructor(private servicio: ServicioEmpleadosService) {}

  ngOnInit(): void {

  }

}
