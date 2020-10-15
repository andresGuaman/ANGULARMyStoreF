import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Chat } from "../modelo/chat";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  Url = "http://localhost:9898/"
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Chat[]> {
    return this.httpClient.get<Chat[]>(this.Url+"Chat");
  }

  public detalle(id: number): Observable<Chat> {
    return this.httpClient.get<Chat>(this.Url+`Chat/${id}`);
  }

  public guardar(chat: Chat): Observable<any>{
    return this.httpClient.post<any>(this.Url+"Chat",chat);
  }

  public update(id: number, chat: Chat): Observable<any>{
    return this.httpClient.put<any>(this.Url+`Chat/${id}`, chat);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.Url+`Chat/${id}`)
  }
}
