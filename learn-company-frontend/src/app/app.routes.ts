import { Routes } from '@angular/router';
import { DesignShowcase } from './atomic/pages/design-showcase/design-showcase';
import { LoginPage } from './atomic/pages/login-page/login-page';

export const APP_ROUTES: Routes = [
  { path: 'design-showcase', component: DesignShowcase },
  { path: 'login', component: LoginPage },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];