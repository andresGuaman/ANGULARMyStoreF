import { Component, OnInit } from '@angular/core';
import { ProveedorService } from "../servicios/proveedor.service";
import { Proveedor } from "../modelo/proveedor";
import { Router } from "@angular/router";

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  prov_empresa = "";
  prov_ruc = "";


  constructor( private proveedorService: ProveedorService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proveedor = new Proveedor(this.prov_empresa, this. prov_ruc);
    this.proveedorService.guardar(proveedor).subscribe(
      data =>{
        this.router.navigate(['/categoria']);
      },
      err =>{
        alert("Ha ocurrido un error, por favor intentalo mas tarde");
        this.router.navigate(['lista'])
      }
    );
  }

}
