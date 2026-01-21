import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="nav">
      <a routerLink="/usuario" routerLinkActive="active">Usuarios</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }



