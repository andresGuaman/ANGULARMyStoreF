import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Producto} from "../modelo/producto"

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productoUrl="http://localhost:9898/";
  constructor(private httpClient: HttpClient) { }







}
