import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios';  // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  // Método para registrar un usuario
  registrarUsuario(usuarioData: any): Observable<any> {
    return this.http.post(this.apiUrl, usuarioData);
  }
}
