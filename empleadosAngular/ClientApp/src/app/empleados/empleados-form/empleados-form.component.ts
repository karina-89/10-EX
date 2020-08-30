import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmpleado } from '../empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.component.html',
  styleUrls: ['./empleados-form.component.css']
})
export class EmpleadosFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private empleadosService: EmpleadosService, private router: Router, private activatedRouter: ActivatedRoute) { }

  modoEdicion: boolean = false;
  formGroup: FormGroup;
  empleadoId: number;

  ngOnInit() {
    this.formGroup = this.fb.group({
      nombre: '',
      apellidos: '',
      cargo: '',
      sueldo: '0'
    });

    this.activatedRouter.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }

      this.modoEdicion = true;
      this.empleadoId = params["id"];

      this.empleadosService.getEmpleado(this.empleadoId.toString()).subscribe(empleado => this.cargaFormulario(empleado), error => this.router.navigate(["/empleados"]));
    });
  }

  cargaFormulario(empleado: IEmpleado) {
    this.formGroup.patchValue({
      nombre: empleado.nombre,
      apellidos: empleado.apellidos,
      cargo: empleado.cargo,
      sueldo: empleado.sueldo
    });
  }

  save() {
    let empleado: IEmpleado = Object.assign({}, this.formGroup.value);
    console.table(empleado);

    if (this.modoEdicion) {
      empleado.id = this.empleadoId;
      this.empleadosService.updateEmpleado(empleado).subscribe(empleado => this.onSaveSuccess(), error => console.error(error));
    } else {
      this.empleadosService.createEmpleado(empleado).subscribe(empleado => this.onSaveSuccess(), error => console.error(error));
    }

  }

  onSaveSuccess() {
    this.router.navigate(["/empleados"]);
  }

}
