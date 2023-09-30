import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormularioEmpleadoComponent } from './formulario-empleado/formulario-empleado.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import {FormsModule} from "@angular/forms";



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
        CommonModule,
      FormsModule
    ]
})
export class EmpleadoModule { }
