import { Component, OnInit } from '@angular/core';
import { IEmpleado } from './empleado';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados: IEmpleado[];

  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit() {
    this.cargarData();
  }

  delete(empleado: IEmpleado) {
    this.empleadoService.deleteEmpleado(empleado.id.toString()).subscribe(empleado => this.cargarData(), error => console.error(error));
  }

  cargarData() {
    this.empleadoService.getEmpleados()
      .subscribe(empleados => this.empleados = empleados,
        error => console.error(error));
  }

}
