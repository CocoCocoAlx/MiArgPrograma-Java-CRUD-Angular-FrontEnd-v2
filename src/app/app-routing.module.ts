import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// rutas
import { NuevoProductoComponent } from './producto/nuevo-producto/nuevo-producto.component';
import { ListaProductosComponent } from './producto/lista-productos/lista-productos.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';

const routes: Routes = [
  {path: '', component: ListaProductosComponent},
  {path: 'detalle/:id', component: DetalleProductoComponent},
  {path: 'nuevo', component: NuevoProductoComponent},
  {path: 'editar/:id', component: EditarProductoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
