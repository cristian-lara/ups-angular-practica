import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {IEmpleado} from "../../../models/empleado";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html',
  styleUrls: ['./formulario-empleado.component.scss']
})
export class FormularioEmpleadoComponent {
  @ViewChild('formRef', { static: false }) form!: NgForm;
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

  resetear() {
    this.form.resetForm();
  }
}
