import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})

export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router)
    { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  borrarProducto(id: number){
    this.productoService.borrar(id).subscribe(
      data => {
        this.toastr.success('Producto eliminado', 'Éxito', {
          positionClass: 'toast-top-right',
          timeOut: 3000,
          progressAnimation: 'increasing'
        })
        this.cargarProductos();
      this.router.navigate(['/'])
   },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          positionClass: 'toast-top-right',
          timeOut: 3000,
          progressAnimation: 'increasing'

        })
      }
    )

  }

}
