import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nombre: string = '';
  username: string = '';
  password: string = '';
  tienda: string = '';
  urlTienda: string = '';

  registeredUsers: { username: string, password: string, nombre: string, tienda: string, urlTienda: string }[] = [];

  constructor(private router: Router) {
    const users = localStorage.getItem('registeredUsers');
    if (users) {
      this.registeredUsers = JSON.parse(users);
    }
  }

  register() {
    if (this.nombre === '' || this.username === '' || this.password === '' || this.tienda === '' || this.urlTienda === '') {
      alert('Por favor, completa todos los campos');
      return;
    }

    const userExists = this.registeredUsers.some(user => user.username === this.username);
    if (userExists) {
      alert('El nombre de usuario ya está en uso');
    } else {
      // Registrar el nuevo usuario
      this.registeredUsers.push({ 
        username: this.username, 
        password: this.password, 
        nombre: this.nombre, 
        tienda: this.tienda, 
        urlTienda: this.urlTienda 
      });
      localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers));
      alert('¡Registro exitoso! Ya puedes iniciar sesión.');

      // Redirigir al login después del registro
      this.router.navigate(['/login']);
    }
  }
}
