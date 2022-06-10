import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto: Producto = null;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router 
  ) { }

  ngOnInit(){
    const id=this.activatedRoute.snapshot.params['id'];
    this.productoService.detalle(id).subscribe(
      data => {
        this.producto = data;
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

  onUpdate():void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.productoService.actualizar(id, this.producto).subscribe(
      data => {
        this.toastr.success('Producto actualizado', 'Éxito', {
          positionClass: 'toast-top-right',
          timeOut: 3000,
          progressAnimation: 'increasing'
        })
   },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          positionClass: 'toast-top-right',
          timeOut: 3000,
          progressAnimation: 'increasing'

        })
      }
    );
  }
  volver(): void{
    this.router.navigate(['/']);
  }
  
}
