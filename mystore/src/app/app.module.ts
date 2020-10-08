import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewproductoComponent } from './newproducto/newproducto.component';
import { ProdetalleComponent } from './prodetalle/prodetalle.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";
import { CategoriaComponent } from './categoria/categoria.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewproductoComponent,
    ProdetalleComponent,
    CabeceraComponent,
    FooterComponent,
    ProductosComponent,
    CategoriaComponent,
    ProveedorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
