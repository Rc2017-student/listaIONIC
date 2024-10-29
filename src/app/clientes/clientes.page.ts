import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  txtNombreCliente: string = '';
  txtDireccionCliente: string = '';
  txtTelefonoCliente: string = '';
  txtCorreoCliente: string = '';
  txtUrlCliente: string = '';

  clientes: {
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    url: string;
  }[] = [];
  constructor() {
    let clientesGuardados = localStorage.getItem('clientes');
    if (clientesGuardados) {
      this.clientes = JSON.parse(clientesGuardados);
    }
   }

  ngOnInit() {
  }

  guardarCliente() {
    if (this.txtNombreCliente == '' || this.txtDireccionCliente == '' || this.txtTelefonoCliente == '' || this.txtCorreoCliente == '' || this.txtUrlCliente == '') {
      alert('Llena todos los campos');
      return;
    } else {
      this.clientes.push({
        nombre: this.txtNombreCliente,
        direccion: this.txtDireccionCliente,
        telefono: this.txtTelefonoCliente,
        correo: this.txtCorreoCliente,
        url: this.txtUrlCliente
      });
      // Limpiar los campos después de guardar
      this.txtNombreCliente = '';
      this.txtDireccionCliente = '';
      this.txtTelefonoCliente = '';
      this.txtCorreoCliente = '';
      this.txtUrlCliente = '';
    }
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  // Método para borrar un cliente
  borraCliente(i: number) {
    this.clientes.splice(i, 1);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  // Método para editar un cliente
  editarCliente(i: number) {
    this.txtNombreCliente = this.clientes[i].nombre;
    this.txtDireccionCliente = this.clientes[i].direccion;
    this.txtTelefonoCliente = this.clientes[i].telefono;
    this.txtCorreoCliente = this.clientes[i].correo;
    this.txtUrlCliente = this.clientes[i].url;
    this.borraCliente(i);
  }
}

