import { Component, OnInit } from '@angular/core';
import { Producto } from "../modelo/producto";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductoService } from "../servicios/producto.service";

@Component({
  selector: 'app-prodetalle',
  templateUrl: './prodetalle.component.html',
  styleUrls: ['./prodetalle.component.css']
})
export class ProdetalleComponent implements OnInit {
  producto: Producto = null;
  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.detalle(id).subscribe(
      data =>{
        this.producto = data;
      },
      err =>{
        alert("Error")
        this.volver();
      }
    );
  }

  volver(): void{
    this.router.navigate(["lista"])
  }

}
