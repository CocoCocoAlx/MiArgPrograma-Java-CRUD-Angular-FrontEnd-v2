import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// complementos propios
import { ListaProductosComponent } from './producto/lista-productos/lista-productos.component';
import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';

// complementos extra
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }