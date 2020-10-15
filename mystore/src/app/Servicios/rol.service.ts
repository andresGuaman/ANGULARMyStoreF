import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Rol } from "../modelo/rol";

@Injectable({
  providedIn: 'root'
})
export class RolService {
  Url = "http://localhost:9898/"
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Rol[]> {
    return this.httpClient.get<Rol[]>(this.Url+"Rol");
  }

  public detalle(id: number): Observable<Rol> {
    return this.httpClient.get<Rol>(this.Url+`Rol/${id}`);
  }

  public guardar(rol: Rol): Observable<any>{
    return this.httpClient.post<any>(this.Url+"Rol",rol);
  }

  public update(id: number, rol: Rol): Observable<any>{
    return this.httpClient.put<any>(this.Url+`Rol/${id}`, rol);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.Url+`Rol/${id}`)
  }
}
