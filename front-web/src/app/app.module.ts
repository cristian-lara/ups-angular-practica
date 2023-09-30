import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {EmpleadoModule} from "../components/empleado/empleado.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmpleadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
