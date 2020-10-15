import { Component, OnInit } from '@angular/core';
import { Producto } from "../modelo/producto";
import { ProductoService } from "../servicios/producto.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-editproducto',
  templateUrl: './editproducto.component.html',
  styleUrls: ['./editproducto.component.css']
})
export class EditproductoComponent implements OnInit {

  productos: Producto []=[];
  producto: Producto = null;
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void{
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err =>{
        console.log(err);
      }
    );
  }

  delete(id : number){
    this.productoService.delete(id).subscribe(
      data =>{
        alert("Eliminado");
        this.listar();
      },
      err =>{
        console.log(err);
        alert("Error");
      }
    );
  }

  buscar(id : number){
    this.productoService.detalle(id).subscribe(
      dato =>{
        this.producto = dato;
      },
      err =>{
        alert("Tenemos problemas con el servidor");
      }
    );
  }

  onUpdate(): void{
    const id: number = 12;
    this.productoService.update(id, this.producto). subscribe(
      data =>{
        alert("Producto Actualizado");
        this.producto = null;
      },
      err =>{
        console.log(err);

      }
    );
  }

}
