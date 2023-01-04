import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasHijoComponent } from './caracteristicas-hijo/caracteristicas-hijo.component';
import { ServicioEmpleadosService } from './servicios/servicio-empleados.service';
import { EmpleadosServiceService } from './servicios/empleados-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasHijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
