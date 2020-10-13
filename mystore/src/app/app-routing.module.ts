import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewproductoComponent } from './newproducto/newproducto.component';
import { ProductosComponent } from "./productos/productos.component";
import { ProdetalleComponent} from "./prodetalle/prodetalle.component";
import { ProveedorComponent } from "./proveedor/proveedor.component";
import { CategoriaComponent } from "./categoria/categoria.component";
import { LoginComponent } from "./login/login.component";
import { RegistroComponent} from "./registro/registro.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path: "newproducto", component: NewproductoComponent},
  {path: "lista", component: ProductosComponent},
  {path: 'producto/:id', component: ProdetalleComponent},
  {path: 'proveedor', component: ProveedorComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component:  RegistroComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
