import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewproductoComponent } from './newproducto/newproducto.component';
import { ProdetalleComponent } from './prodetalle/prodetalle.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    AppComponent,
    NewproductoComponent,
    ProdetalleComponent,
    CabeceraComponent,
    FooterComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
