import { Component, Output, EventEmitter } from '@angular/core';
import { LoginForm } from '../../../core/models/login-form.model';

@Component({
  selector: 'app-login-page-template',
  standalone: false,
  templateUrl: './login-page-template.html',
  styleUrl: './login-page-template.scss',
})
export class LoginPageTemplate {

  // emitirá el email y password cuando se haga click en el botón de login
  @Output() login = new EventEmitter<LoginForm>();

  // emitirá un evento cuando se haga click en "¿Olvidaste tu contraseña?"
  @Output() forgotPassword = new EventEmitter<void>();

  // manejar el evento de login desde el login-card
  handleLogin(data: LoginForm) {
    this.login.emit(data);
  }

  // manejar el evento de olvidar contraseña desde el login-card
  handleForgotPassword() {
    this.forgotPassword.emit();
  }
}