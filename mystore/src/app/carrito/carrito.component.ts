import { Component, OnInit, Input } from '@angular/core';
import { Producto } from "../modelo/producto";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  @Input()
  productos: Producto = null;
  data: Producto[]=[];
  constructor() { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void{
    this.data.push(this.productos);
  }
}
