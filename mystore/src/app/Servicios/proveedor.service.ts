import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Proveedor } from "../modelo/proveedor";

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  url="http://localhost:9898/"
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proveedor[]>{
    return this.httpClient.get<Proveedor[]>(this.url+"Proveedor");
  }

  public detalle(id: number): Observable<Proveedor>{
    return this.httpClient.get<Proveedor>(this.url+`Proveedor/${id}`);
  }

  public guardar(proveedor: Proveedor): Observable<any>{
    return this.httpClient.post<any>(this.url+"Proveedor",proveedor);
  }

  public update(id: number, proveedor: Proveedor): Observable<any>{
    return this.httpClient.put<any>(this.url+`Proveedor/${id}`,proveedor);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url+`Proveedor/${id}`)
  }

}
