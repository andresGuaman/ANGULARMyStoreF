import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ClienteService } from "../servicios/cliente.service";
import { Cliente } from "../modelo/cliente";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor( private clienteService: ClienteService,
               private router: Router) { }
  cli_usuario = "";
  cli_password = "";
  cli_descuento = "veinte"
  ngOnInit(): void {
  }

  onCreate(): void{
    const cliente = new Cliente(this.cli_usuario, this.cli_password, this.cli_descuento);
    this.clienteService.guardar(cliente).subscribe(
      data => {
        this.router.navigate(['lista'])
      },
      err => {
        alert(err)
        this.router.navigate(['home'])
      }
    );
  }
}
