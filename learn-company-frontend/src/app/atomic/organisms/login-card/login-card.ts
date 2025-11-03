import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-card',
  standalone: false,
  templateUrl: './login-card.html',
  styleUrl: './login-card.scss',
})
export class LoginCard {
  @Input() email : string = '';
  @Input() password : string = '';

  @Output() login = new EventEmitter<{ email: string; password: string }>();
  @Output() forgotPassword = new EventEmitter<void>();

  onLoginClick() {
    this.login.emit({
      email: this.email,
      password: this.password
    });
  }

  onForgotPasswordClick() {
    this.forgotPassword.emit();
  }
}