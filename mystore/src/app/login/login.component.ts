import { Component, OnInit } from '@angular/core';
import { Cliente } from "../modelo/cliente";
import { ClienteService } from "../servicios/cliente.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cli_usuario = "";
  cli_password = "";
  constructor( private clienteService: ClienteService,
               private router: Router) { }

  ngOnInit(): void {
  }

  ingresar(): void{
    this.clienteService.login(this.cli_usuario, this.cli_password).subscribe(
      data =>{
        this.router.navigate(['lista']);
      },
      err =>{
        console.log(err);
      }
    );
  }

}
