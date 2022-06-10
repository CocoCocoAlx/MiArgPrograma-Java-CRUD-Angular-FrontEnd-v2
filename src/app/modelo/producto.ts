export class Producto {
    id?: any;
    nombre: string;
    precio: number;
    descripcion: string;
    
    constructor(nombre: string, precio:number, descripcion:string){
        this.nombre=nombre;
        this.precio=precio;
        this.descripcion=descripcion;
    }
}   
