import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Encabezadocarrito } from "../modelo/encabezadocarrito";

@Injectable({
  providedIn: 'root'
})
export class EncabezadocarritoService {

  url="http://localhost:9898/api/v1/";
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Encabezadocarrito[]> {
    return this.httpClient.get<Encabezadocarrito[]>(this.url+"");
  }

  public detalle(id: number): Observable<Encabezadocarrito> {
    return this.httpClient.get<Encabezadocarrito>(this.url+`/${id}`);
  }

  public guardar(encabezadocarrito: Encabezadocarrito): Observable<any>{
    return this.httpClient.post<any>(this.url+"",encabezadocarrito);
  }

  public update(id: number, encabezadocarrito: Encabezadocarrito): Observable<any>{
    return this.httpClient.put<any>(this.productoUrl+`/${id}`, encabezadocarrito);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.productoUrl+`/${id}`)
  }
}
