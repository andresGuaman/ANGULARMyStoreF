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

  constructor() { }

  ngOnInit(): void {
  }

}
