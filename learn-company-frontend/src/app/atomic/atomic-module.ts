import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './atoms/button/button';
import { InputComponent } from './atoms/input/input';
import { Label } from './atoms/label/label';
import { Icon } from './atoms/icon/icon';
import { DesignShowcase } from './pages/design-showcase/design-showcase';
import { FormField } from './molecules/form-field/form-field';
import { LoginCard } from './organisms/login-card/login-card';
import { LoginPageTemplate } from './templates/login-page-template/login-page-template';
import { LoginPage } from './pages/login-page/login-page';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    Label,
    Icon,
    DesignShowcase,
    FormField,
    LoginCard,
    LoginPageTemplate,
    LoginPage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    Label,
    Icon,
    DesignShowcase,
    FormField,
    LoginCard,
    LoginPageTemplate,
    LoginPage
  ]
})
export class AtomicModule { }
