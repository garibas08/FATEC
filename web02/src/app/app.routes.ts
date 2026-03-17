import { Routes } from '@angular/router';
import { CestaComponent } from './cesta/cesta';
import { LoginComponent } from './login/login';
import { CadastroComponent } from './cadastro/cadastro';

export const routes: Routes = [
  { path: 'cesta', component: CestaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent }
];