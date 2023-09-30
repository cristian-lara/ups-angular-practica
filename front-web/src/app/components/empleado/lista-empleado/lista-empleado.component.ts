import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEmpleado} from "../../../models/empleado";

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.scss']
})
export class ListaEmpleadoComponent {
  @Input() empleados: IEmpleado[] = [];
  @Output() empleadoSeleccionado = new EventEmitter<IEmpleado>();
  @Output() empleadoSeleccionadoEliminar = new EventEmitter<string>();

  editarEmpleado(empleado: IEmpleado) {
    console.log('Editar empleado:', empleado);
    this.empleadoSeleccionado.emit(empleado);
  }

  eliminarEmpleado(empleado: IEmpleado) {
    console.log('Eliminar empleado:', empleado);
    this.empleadoSeleccionadoEliminar.emit(empleado._id);
  }
}
