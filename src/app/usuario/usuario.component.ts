// Importaciones necesarias para el componente Usuario
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';      // [(ngModel)]
import { CommonModule } from '@angular/common';    // *ngIf, *ngFor
import { UsuarioService } from '../service/usuario.service';
import { TareaTdfComponent } from './tarea/TareaTdfComponent';
import { TareaFormComponent } from './tarea/TareaFormComponent';

/**
 * Componente para gestionar usuarios en la aplicación
 * Permite listar y agregar usuarios utilizando el servicio UsuarioService
 */
@Component({
  selector: 'app-usuario',
  standalone: true, // Necesario para que 'imports' funcione en componentes independientes
  imports: [FormsModule, CommonModule, TareaTdfComponent, TareaFormComponent],
  templateUrl: './usuario.html',
  styleUrls: ['./usuario.css'], // 👈 plural correcto
})
export class UsuarioComponent implements OnInit {
  /** Nombre del usuario a agregar (enlazado al formulario) */
  nombre = 'Coder';

  /** Lista de usuarios obtenida desde la API */
  listUsuarios: any[] = [];

  /** Inyección del servicio UsuarioService para operaciones CRUD */
  constructor(private svc: UsuarioService) { }
  
  visible = true;

  /** Método del ciclo de vida que se ejecuta al inicializar el componente */
  ngOnInit(): void {
    this.listarUsuarios();
  }

  agregarUsuario() {
    const nuevo = { nombre: this.nombre?.trim() };
    if (!nuevo.nombre) { alert('El nombre es requerido'); return; }

    this.svc.create(nuevo).subscribe({
      next: () => this.listarUsuarios(),      // recarga después de crear
      error: (e) => console.error('Error al crear usuario:', e),
    });
  }

  listarUsuarios() {
    this.svc.getAll().subscribe({
      next: (usuarios) => {
        console.log('Usuarios obtenidos:', usuarios);
        if (Array.isArray(usuarios)) {
          this.listUsuarios = usuarios;
        } else if (
          usuarios &&
          typeof usuarios === 'object' &&
          'content' in usuarios &&
          Array.isArray((usuarios as any).content)
        ) {
          this.listUsuarios = (usuarios as any).content;
        } else {
          this.listUsuarios = [];
        }
      },
      error: (e) => console.error('Error al listar usuarios:', e),
    });
  }
}

