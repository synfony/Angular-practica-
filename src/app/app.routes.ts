import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'usuario', pathMatch: 'full' },
  { path: 'usuario', component: UsuarioComponent },
];