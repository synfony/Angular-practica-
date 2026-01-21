import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario { id?: number; nombre: string; }

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  // Usa proxy en dev o habilita CORS en el backend:
  // - con proxy: '/api/v1/usuario'
  // - sin proxy: 'http://localhost:8080/api/v1/usuario'
  private readonly apiUrl = '/api/v1/usuario';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }
}