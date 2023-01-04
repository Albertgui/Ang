export class Empleado {

  constructor(nombre: string, apeliido: string, cargo: string, salario: number){

    this.nombre = nombre;
    this.apeliido = apeliido;
    this.cargo = cargo;
    this.salario = salario;

  }

  nombre: string = "";
  apeliido: string = "";
  cargo: string = "";
  salario: number = 0;

}
