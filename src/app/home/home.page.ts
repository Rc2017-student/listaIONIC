import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
txtNombre:string = ''
txtDescripcion:string = ''
txtCantidad:string = ''
txtPrecioCosto:string = ''
txtPrecioVenta:string = ''
txtUrl:string = ''

productos:{
  nombre:string,
  descripcion:string,
  cantidad:string,
  precioCosto:string,
  precioVenta:string,
  url:string
}[] = []
  constructor() {
    let productosGuardados = localStorage.getItem('productos')
    if (productosGuardados){
      this.productos = JSON.parse(productosGuardados)
    }
  }

  guardarProducto(){
    if (this.txtNombre == '' || this.txtDescripcion == '' || this.txtCantidad == '' || this.txtPrecioCosto == '' || this.txtPrecioVenta == '' || this.txtUrl == ''){
      alert('Llena todos los campos')
      return
    }
    else{
      this.productos.push({
        nombre: this.txtNombre,
        descripcion: this.txtDescripcion,
        cantidad: this.txtCantidad,
        precioCosto: this.txtPrecioCosto,
        precioVenta: this.txtPrecioVenta,
        url: this.txtUrl
      })
      this.txtNombre = ''
      this.txtDescripcion = ''
      this.txtCantidad = ''
      this.txtPrecioCosto = ''
      this.txtPrecioVenta = ''
      this.txtUrl = ''
    }
    localStorage.setItem('productos', JSON.stringify(this.productos))
  }

  borraProducto(i:number){
    this.productos.splice(i,1)
    localStorage.setItem('productos', JSON.stringify(this.productos))
  }

  
  editarProducto(i:number){
    this.txtNombre = this.productos[i].nombre
    this.txtDescripcion = this.productos[i].descripcion
    this.txtCantidad = this.productos[i].cantidad
    this.txtPrecioCosto = this.productos[i].precioCosto
    this.txtPrecioVenta = this.productos[i].precioVenta
    this.txtUrl = this.productos[i].url
    this.borraProducto(i)
  }

}
