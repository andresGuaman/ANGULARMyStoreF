import { Component, OnInit } from '@angular/core';
import { CategoriaService } from "../servicios/categoria.service";
import { Categoria } from "../modelo/categoria";
import { Router } from "@angular/router";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  cat_categoria = "";
  cat_color = "";
  cat_edad = null;
  cat_genero = "";
  cat_marca = "";
  constructor( private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const categoria = new Categoria(this.cat_categoria, this.cat_color, this.cat_edad, this.cat_genero, this.cat_marca);
    this.categoriaService.guardar(categoria).subscribe(
      data =>{
        this.router.navigate(['newproducto']);
      },
      err =>{
        alert("Error");
        this.router.navigate(['categoria']);
      }
    );
  }

}
