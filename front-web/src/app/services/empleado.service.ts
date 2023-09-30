import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IEmpleado} from "../models/empleado";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de empleados
  getEmpleados(): Observable<IEmpleado[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/empleados`);
  }

  // Método para crear un nuevo empleado
  crearEmpleado(empleado: IEmpleado): Observable<any> {
    console.log('crear empleado', empleado)
    return this.http.post<IEmpleado>(`${this.baseUrl}/api/empleados`, empleado);
  }

  // Método para obtener un empleado por su ID
  getEmpleado(id: string): Observable<IEmpleado> {
    return this.http.get<IEmpleado>(`${this.baseUrl}/api/empleados/${id}`);
  }

  // Método para actualizar un empleado
  actualizarEmpleado(id: string, empleado: IEmpleado): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.put<any>(`${this.baseUrl}/api/empleados/${id}`, empleado, httpOptions);
  }

  // Método para eliminar un empleado por su ID
  eliminarEmpleado(id: string): Observable<IEmpleado> {
    return this.http.delete<IEmpleado>(`${this.baseUrl}/api/empleados/${id}`);
  }
}
