import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from "../modelo/cliente";

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  url = "http://localhost:9898/"
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.url+"Cliente")
  }

  public detalle(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.url+`Cliente/${id}`);
  }

  public login(usu: string, pass: string): Observable<Cliente>{
    return this.httpClient.get<Cliente>(this.url+`Cliente/${usu}/${pass}`);
  }

  public guardar(cliente: Cliente): Observable<any>{
    return this.httpClient.post<any>(this.url+"Cliente",cliente);
  }

  public update(id: number, cliente: Cliente): Observable<any>{
    return this.httpClient.put<any>(this.url+`Cliente/${id}`, cliente);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url+`Cliente/${id}`)
  }
}
