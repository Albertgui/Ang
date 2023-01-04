import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosServiceService } from './servicios/empleados-service.service';
import { ServicioEmpleadosService } from './servicios/servicio-empleados.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Formulario de listado';
  subtitle = 'Empleados registrados';

  constructor(private servicio: ServicioEmpleadosService, private newServicio: EmpleadosServiceService) {

  }

  empleados: Empleado[] = [];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmp() {

    let otroEmp = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.servicio.muestraMensaje("Nuevo empleado, nombre: " + otroEmp.nombre);

    this.newServicio.agregarEmpSer(otroEmp);

  }

  ngOnInit(): void {

    this.empleados = this.newServicio.empleados;

  }

}


