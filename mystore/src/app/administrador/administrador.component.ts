import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logo = 'assets/logo.png'
  producto(): void{
    this.router.navigate(["Producto"])
  }

  empleados(): void{
    this.router.navigate(["administrar/empleados"])
  }

}
