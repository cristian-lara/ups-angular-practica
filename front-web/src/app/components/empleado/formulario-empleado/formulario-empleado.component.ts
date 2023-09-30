import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEmpleado} from "../../../models/empleado";

@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html',
  styleUrls: ['./formulario-empleado.component.scss']
})
export class FormularioEmpleadoComponent {
  @Input() empleado: IEmpleado = {
    nombre: '',
    cargo: '',
    departamento: '',
    sueldo: 0
  };

  @Output() empleadoSeleccionado = new EventEmitter<IEmpleado>();
  guardarEmpleado() {
    this.empleadoSeleccionado.emit(this.empleado);
  }
}
