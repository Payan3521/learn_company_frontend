import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-page-template',
  standalone: false,
  templateUrl: './login-page-template.html',
  styleUrl: './login-page-template.scss',
})
export class LoginPageTemplate {
  @Output() login = new EventEmitter<{ email: string; password: string }>();
  @Output() forgotPassword = new EventEmitter<void>();

  handleLogin(event: { email: string; password: string }) {
    this.login.emit(event);
  }

  handleForgotPassword() {
    this.forgotPassword.emit();
  }
}