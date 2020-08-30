import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmpleado } from './empleado';

export class EmpleadosService {

  private apiURL = this.baseUrl + "api/empleados";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  getEmpleados(): Observable<IEmpleado[]> {
    return this.http.get<IEmpleado[]>(this.apiURL);
  }

  getEmpleado(empleadoId: string): Observable<IEmpleado> {
    return this.http.get<IEmpleado>(this.apiURL + '/' + empleadoId);
  }

  createEmpleado(empleado: IEmpleado): Observable<IEmpleado> {
    return this.http.post<IEmpleado>(this.apiURL, empleado);
  }

  updateEmpleado(empleado: IEmpleado): Observable<IEmpleado> {
    return this.http.put<IEmpleado>(this.apiURL + '/' + empleado.id.toString(), empleado);
  }

  deleteEmpleado(empleadoId: string): Observable<IEmpleado> {
    return this.http.delete<IEmpleado>(this.apiURL + '/' + empleadoId);
  }
}
