import {Component, OnInit} from '@angular/core';
import {EmpleadoService} from "../../../services/empleado.service";
import {IEmpleado} from "../../../models/empleado";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit{
  empleados: IEmpleado[]= [];
  empleadoSeleccionado:IEmpleado= {
    nombre: '',
    cargo: '',
    departamento: '',
    sueldo: 0
  };
  estaEditando = false;
  constructor(private readonly _empeadoService: EmpleadoService) {

  }

  getEmpleados(){
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
    this._empeadoService.crearEmpleado(empleado).subscribe(
      data => {
this.getEmpleados()
      },
      err =>{
        console.error('err', err)
      }
    );
  }

  ngOnInit(): void {
    this.getEmpleados();
  }

  handleEmpleadoSeleccionadoLista(empleado: IEmpleado) {
    this.empleadoSeleccionado = empleado;
  }

  eliminar(id: string) {
    this._empeadoService.eliminarEmpleado(id).subscribe(
      ()=> this.getEmpleados(),
      ()=> console.error('error al eliminar')
    );
  }
}
