import { Component, OnInit } from '@angular/core';
import { Producto } from "../modelo/producto";
import { Router } from "@angular/router";
import { ProductoService } from "../servicios/producto.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  Title="Mas Buscados";
  productos: Producto[]=[];
  constructor(private productoService : ProductoService) { }

  ngOnInit(): void {
    this.cargarProducto();
  }

  cargarProducto(): void{
    this.productoService.lista().subscribe(
      data =>{
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
