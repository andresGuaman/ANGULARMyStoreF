import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from "../servicios/empleado.service";
import { Router } from "@angular/router";
import { Empleado } from "../modelo/empleado";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  emp_password = "";
  emp_salario = 0;
  emp_usuario = "";
  constructor( private empleadoService: EmpleadoService,
                private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const empleado = new Empleado(this.emp_password, this.emp_salario, this.emp_usuario);
    this.empleadoService.guardar(empleado).subscribe(
      data =>{
        alert("Empleado Registrado")
        this.router.navigate(['administrar'])
      },
      err =>{
        alert("err")
      }
    );
  }
}
