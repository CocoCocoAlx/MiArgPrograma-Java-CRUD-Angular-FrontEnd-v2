import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  nombre: string = '';
  precio: number = 0;
  descripcion: string ='';

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreate(): void{
    const producto = new Producto(this.nombre, this.precio, this.descripcion);
    this.productoService.crear(producto).subscribe(
      data => {
        this.toastr.success('Producto creado', 'Éxito', {
          positionClass: 'toast-top-right',
          timeOut: 3000,
          progressAnimation: 'increasing'
        })
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
    volver(): void{
      this.router.navigate(['/']);
    }

}
