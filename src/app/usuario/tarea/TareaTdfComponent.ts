import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarea-tdf',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tarea-tdf.html',
  styleUrls: ['./tarea-tdf.css']
})
export class TareaTdfComponent {
  tarea = { titulo: '' };
  tareas: { titulo: string }[] = [];

  guardar() {
    if (this.tarea.titulo.trim()) {
      this.tareas.push({ titulo: this.tarea.titulo });
      console.log('Guardando tarea (TDF):', this.tarea);
      this.tarea = { titulo: '' };
    }
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}