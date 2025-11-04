import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoginForm } from '../../../core/models/login-form.model';

@Component({
  selector: 'app-login-card',
  standalone: false,
  templateUrl: './login-card.html',
  styleUrl: './login-card.scss',
})
export class LoginCard {

  @Output() login = new EventEmitter<LoginForm>();
  @Output() forgotPassword = new EventEmitter<void>();

  // Se dispara desde (onClick) del botón
  onLoginClick(data: LoginForm) {
    this.login.emit(data);
  }

  onForgotPasswordClick() {
    this.forgotPassword.emit();
  }
}