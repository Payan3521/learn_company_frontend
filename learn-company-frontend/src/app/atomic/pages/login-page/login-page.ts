import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  email: string = '';
  password: string = '';

  onLogin(event: { email: string; password: string }) {
    this.email = event.email;
    this.password = event.password;

    console.log('Inicio de sesión:', event);
    alert(`Login => email: ${event.email}, password: ${event.password}`);
  }

  onForgotPassword() {
    console.log('Recuperar contraseña');
    alert('Recuperar contraseña - Funcionalidad pendiente');
  }
}