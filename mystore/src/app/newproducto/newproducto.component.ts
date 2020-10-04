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
  pro_codigo="";
  pro_costo=null;
  pro_descripcion="";
  pro_foto="";
  pro_marca = "";
  pro_modelo = "";
  pro_precio = null;
  pro_stock = null;
  cat_id= null;

  constructor(
    private productoService: ProductoService,
    private router: Router;
  ) { }

  ngOnInit(): void {}

  onCreate(): void{
    const producto = new Producto(this.pro_codigo, this.pro_costo, this.pro_descripcion, this.pro_foto, this.marca,this.pro_modelo, this.pro_precio, this.pro_stock, this.cat_id);
    this.productoService.guardar(producto).subscribe(
      data =>{
        this.router.navigate(['/productos']);
      },
      err =>{
        this.router.navigate(['/productos']);
        alert("Error");
      }
    );
  }
}
