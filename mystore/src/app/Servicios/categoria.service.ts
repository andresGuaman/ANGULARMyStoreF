import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categoria } from "../modelo/categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  Url = "http://localhost:9898/"
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.Url+"Categoria");
  }

  public detalle(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(this.Url+`Categoria/${id}`);
  }

  public guardar(categoria: Categoria): Observable<any>{
    return this.httpClient.post<any>(this.Url+"Categoria",categoria);
  }

  public update(id: number, categoria: Categoria): Observable<any>{
    return this.httpClient.put<any>(this.Url+`Categoria/${id}`, categoria);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.Url+`Categoria/${id}`)
  }
}
