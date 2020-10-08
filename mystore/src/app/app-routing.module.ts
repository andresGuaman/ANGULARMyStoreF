import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewproductoComponent } from './newproducto/newproducto.component';
import { ProductosComponent } from "./productos/productos.component";
import { ProdetalleComponent} from "./prodetalle/prodetalle.component";
import { ProveedorComponent } from "./proveedor/proveedor.component";
import { CategoriaComponent } from "./categoria/categoria.component";

const routes: Routes = [
  {path: "newproducto", component: NewproductoComponent},
  {path: "lista", component: ProductosComponent},
  {path: 'producto/:id', component: ProdetalleComponent},
  {path: 'proveedor', component: ProveedorComponent},
  {path: 'categoria', component: CategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
