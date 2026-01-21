import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarea-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tarea-form.html',
  styleUrls: ['./tarea-form.css']
})
export class TareaFormComponent {
  form;
  tareas: { titulo: string; descripcion: string; completada: boolean }[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: [''],
      completada: [false]
    });
  }

  submit() {
    if (this.form.invalid) return;
    const tarea = {
      titulo: this.form.value.titulo || '',
      descripcion: this.form.value.descripcion || '',
      completada: this.form.value.completada || false
    };
    this.tareas.push(tarea);
    console.log('Guardando (RF):', this.form.value);
    this.form.reset({ titulo: '', descripcion: '', completada: false });
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }

  toggleCompletada(index: number) {
    this.tareas[index].completada = !this.tareas[index].completada;
  }
}