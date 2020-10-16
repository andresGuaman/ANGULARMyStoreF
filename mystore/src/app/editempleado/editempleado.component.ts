import { Component, OnInit } from '@angular/core';
import { Empleado } from "../modelo/empleado";
import { EmpleadoService } from "../servicios/empleado.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-editempleado',
  templateUrl: './editempleado.component.html',
  styleUrls: ['./editempleado.component.css']
})
export class EditempleadoComponent implements OnInit {

  empleados: Empleado [] = [];
  empleado: Empleado = null;
  constructor(private empleadoService: EmpleadoService,
              private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void{
    this.empleadoService.lista().subscribe(
      data =>{
        this.empleados = data;
      },
      err =>{
        console.log(err)
      }
    );
  }

  delete(id: number){
    this.empleadoService.delete(id).subscribe(
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

  buscar(id: number){
    this.empleadoService.detalle(id).subscribe(
      data =>{
        this.empleado = data;
      },
      err =>{
        alert(err);
      }
    );
  }

  onUpdate(id: number){
    this.empleadoService.update(id, this.empleado).subscribe(
      data =>{
        alert("Empleado Editado");
        this.empleado = null;
        this.router.navigate(['administrar']);
      },
      err =>{
        console.log(err);

      }
    );
  }

}
