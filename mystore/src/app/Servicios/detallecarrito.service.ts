import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DetalleCarrito } from "../modelo/detallecarrito";

@Injectable({
  providedIn: 'root'
})
export class DetallecarritoService {

  Url = "http://localhost:9898/api/v1"
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<DetalleCarrito[]> {
    return this.httpClient.get<DetalleCarrito[]>(this.Url+"");
  }

  public detalle(id: number): Observable<DetalleCarrito> {
    return this.httpClient.get<DetalleCarrito>(this.Url+`/${id}`);
  }

  public guardar(detallecarrito: DetalleCarrito): Observable<any>{
    return this.httpClient.post<any>(this.Url+"",detallecarrito);
  }

  public update(id: number, detallecarrito: DetalleCarrito): Observable<any>{
    return this.httpClient.put<any>(this.Url+`/${id}`, detallecarrito);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.Url+`/${id}`)
  }
}
