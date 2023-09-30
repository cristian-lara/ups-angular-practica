import { Component } from '@angular/core';
import {EmpleadoService} from "../../../services/empleado.service";
import {IEmpleado} from "../../../models/empleado";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent {
  empleados: IEmpleado[]= [];

  constructor(private readonly _empeadoService: EmpleadoService) {
    this._empeadoService.getEmpleados().subscribe(
      data => {
        this.empleados = data;
      },
      error => {
        console.error('error', error)
      }
    )
  }

  handleEmpleado(empleado: IEmpleado) {
    console.log('empleado', empleado)
  }
}
