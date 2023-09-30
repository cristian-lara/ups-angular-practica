import {Component, Input} from '@angular/core';
import {IEmpleado} from "../../../models/empleado";

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.scss']
})
export class ListaEmpleadoComponent {
  @Input() empleados: IEmpleado[] = [];

  editarEmpleado(empleado: IEmpleado) {
    console.log('Editar empleado:', empleado);
  }

  eliminarEmpleado(empleado: IEmpleado) {
    console.log('Eliminar empleado:', empleado);
  }
}
