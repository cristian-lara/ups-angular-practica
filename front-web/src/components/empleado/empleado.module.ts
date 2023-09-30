import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormularioEmpleadoComponent } from './formulario-empleado/formulario-empleado.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';



@NgModule({
    declarations: [
        EmpleadoComponent,
        FormularioEmpleadoComponent,
        ListaEmpleadoComponent
    ],
    exports: [
        EmpleadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class EmpleadoModule { }
