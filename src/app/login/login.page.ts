import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  registeredUsers: { username: string, password: string }[] = [];

  constructor(private router: Router) {
    const savedUsername = localStorage.getItem('savedUsername');
    if (savedUsername) {
      this.username = savedUsername;
      this.rememberMe = true;
    }


  }
  ngOnInit(){
    const users = localStorage.getItem('registeredUsers');
    if (users) {
      this.registeredUsers = JSON.parse(users);
    }
  }

  login() {
    if (this.username === '' || this.password === '') {
      alert('Por favor, completa todos los campos');
      return;
    }

    const user = this.registeredUsers.find(user => user.username === this.username && user.password === this.password);

    if (user) {
      if (this.rememberMe) {
        localStorage.setItem('savedUsername', this.username);
      } else {
        localStorage.removeItem('savedUsername');
      }
      alert('¡Inicio de sesión exitoso!');
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/menuprincipal'])
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }

  // Redirige a la página de registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
