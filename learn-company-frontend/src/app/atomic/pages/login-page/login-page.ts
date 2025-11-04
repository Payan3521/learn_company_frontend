import { Component } from '@angular/core';
import { LoginForm } from '../../../core/models/login-form.model';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  onLogin(data: LoginForm) {
    console.log('Inicio de sesión:', data);
    alert(`Login => email: ${data.email}, password: ${data.password}`);
  }

  onForgotPassword() {
    console.log('Recuperar contraseña');
    alert('Recuperar contraseña - Funcionalidad pendiente');
  }
}