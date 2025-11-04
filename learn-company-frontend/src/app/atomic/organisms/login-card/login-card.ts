import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoginForm } from '../../../core/models/login-form.model';

@Component({
  selector: 'app-login-card',
  standalone: false,
  templateUrl: './login-card.html',
  styleUrl: './login-card.scss',
})
export class LoginCard {

  form: LoginForm = { email: '', password: '' };

  @Output() login = new EventEmitter<LoginForm>();
  @Output() forgotPassword = new EventEmitter<void>();

  // Se dispara desde (onClick) del botón
  onLoginClick() {
    this.login.emit(this.form);
  }

  onForgotPasswordClick() {
    this.forgotPassword.emit();
  }
}