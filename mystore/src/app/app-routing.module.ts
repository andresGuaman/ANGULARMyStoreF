import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewproductoComponent } from './newproducto/newproducto.component';
import { ProductosComponent } from "./productos/productos.component";
const routes: Routes = [
  {path: "nuevo", component: NewproductoComponent},
  {path: "lista", component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
