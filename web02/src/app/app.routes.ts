import { Routes } from '@angular/router';
import { CestaComponent } from './cesta/cesta';
import { LoginComponent } from './login/login';
import { CadastroComponent } from './cadastro/cadastro';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'cesta', component: CestaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '**', redirectTo: 'login' }
];
