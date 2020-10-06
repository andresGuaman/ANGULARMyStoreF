import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Persona} from "../modelo/persona";

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaUrl="http://localhost:9898/api/v1"
  constructor( private httpClient: HttpClient) { }


  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Producto[]>(this.personaUrl+"/Persona");
  }

  public detalle(id: number): Observable<Persona>{
    return this.httpClient.get<Producto>(this.personaUrl+`/Persona/${id}`)
  }

  public guardar(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.personaUrl+ "/Persona", persona)
  }

  public update(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.productoUrl+`Persona/${id}`, persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.productoUrl+`Persona/${id}`)
  }
}
