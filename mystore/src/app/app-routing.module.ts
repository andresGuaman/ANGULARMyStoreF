import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewproductoComponent } from './newproducto/newproducto.component';
import { ProductosComponent } from "./productos/productos.component";
import { ProdetalleComponent} from "./prodetalle/prodetalle.component";


const routes: Routes = [
  {path: "nuevo", component: NewproductoComponent},
  {path: "lista", component: ProductosComponent},
  {path: 'producto/:id', component: ProdetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
