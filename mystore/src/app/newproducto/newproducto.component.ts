import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../servicios/producto.service";
import { Producto } from "../modelo/producto";
import { Router } from "@angular/router";

@Component({
  selector: 'app-newproducto',
  templateUrl: './newproducto.component.html',
  styleUrls: ['./newproducto.component.css']
})
export class NewproductoComponent implements OnInit {
  pro_codigo_barra="";
  pro_costo=null;
  pro_descripcion="";
  pro_foto="";
  pro_marca = "";
  pro_modelo = "";
  pro_precio = null;
  pro_stock = null;

  constructor(private productoService: ProductoService, private router: Router ) { }

  ngOnInit(): void {}

  onCreate(): void{
    const producto = new Producto(this.pro_codigo_barra, this.pro_costo, this.pro_descripcion, this.pro_foto, this.pro_marca,this.pro_modelo, this.pro_precio, this.pro_stock);
    this.productoService.guardar(producto).subscribe(
      data =>{
        this.router.navigate(['/lista']);
      },
      err =>{
        alert("Error");
        this.router.navigate(['/lista']);
      }
    );
  }
}
