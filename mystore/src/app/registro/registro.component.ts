import { Component, OnInit } from '@angular/core';
import { PersonaService } from "../servicios/persona.service";
import { Persona } from "../modelo/persona";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  per_apellido = "";
  per_cedula = "";
  per_correo = "";
  per_estado = "activo";
  per_foto = "";
  per_nombre = "";
  per_telefono = "";

  constructor( private personaService: PersonaService,
               private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const persona = new Persona(this.per_apellido, this.per_cedula, this.per_correo, this.per_estado, this.per_foto, this.per_nombre, this.per_telefono);
    this.personaService.guardar(persona).subscribe(
      data =>{
        this.router.navigate(['/cliente']);
      },
      err =>{
        alert("Tenemos problemas con el servidor, por favor intentalo mas tarde")
        this.router.navigate(['home'])
      }
    );
  }

}
