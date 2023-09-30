import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from './empleado/empleado.component';



@NgModule({
    declarations: [
        EmpleadoComponent
    ],
    exports: [
        EmpleadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class EmpleadoModule { }
