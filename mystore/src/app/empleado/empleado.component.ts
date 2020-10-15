import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from "../servicios/empleado.service";
import { Router } from "@angular/router";
import { Empleado } from "../modelo/empleado";
import { RolService } from "../servicios/rol.service";
import { Rol } from "../modelo/rol";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  emp_password = "";
  emp_salario = 0;
  emp_usuario = "";
  rol_departamento = "";
  rol_estado = "activo";
  rol_nombre = "";
  very = false;
  constructor( private empleadoService: EmpleadoService,
                private router: Router,
                private rolService: RolService) { }

  ngOnInit(): void {
  }
  onCreateRol(): void{
    const rol = new Rol(this.rol_departamento, this.rol_estado, this.rol_nombre);
    this.rolService.guardar(rol).subscribe(
      data =>{
        this.very = true;
      },
      err =>{
        alert(err)
        console.log(err)
      }
    );
  }
  onCreate(): void{
    const empleado = new Empleado(this.emp_password, this.emp_salario, this.emp_usuario);
    this.empleadoService.guardar(empleado).subscribe(
      data =>{
        alert("Empleado Registrado")
        this.router.navigate(['administrar'])
      },
      err =>{
        alert(err)
      }
    );
  }
}
