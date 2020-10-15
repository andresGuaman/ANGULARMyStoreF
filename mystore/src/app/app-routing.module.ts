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
import { AdministradorComponent } from "./administrador/administrador.component";
import { CarritoComponent } from "./carrito/carrito.component";
import { ClienteComponent } from "./cliente/cliente.component";
import { EditproductoComponent } from "./editproducto/editproducto.component";
import { ChatComponent } from "./chat/chat.component";

const routes: Routes = [
  {path: "newproducto", component: NewproductoComponent},

  {path: "administrar", component: AdministradorComponent},
  {path: "lista", component: ProductosComponent},
  {path: 'producto/:id', component: ProdetalleComponent},
  {path: 'Producto', component: ProveedorComponent},
  {path: 'Producto/editar', component: EditproductoComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'proveedor/login', component: LoginComponent},
  {path: 'registro', component:  RegistroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
