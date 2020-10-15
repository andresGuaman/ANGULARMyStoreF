import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Empleado } from "../modelo/empleado";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  empleadoUrl = "http://localhost:9898"
  constructor( private httpClient: HttpClient) { }

  public lista(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.empleadoUrl+"/Empleado");
  }

  public detalle(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(this.empleadoUrl+`/Empleado/${id}`);
  }

  public guardar(empleado: Empleado): Observable<any>{
    return this.httpClient.post<any>(this.empleadoUrl+"/Empleado",empleado);
  }

  public update(id: number, empleado: Empleado): Observable<any>{
    return this.httpClient.put<any>(this.empleadoUrl+`/Empleado/${id}`, empleado);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.empleadoUrl+`/Empleado/${id}`)
  }
}
