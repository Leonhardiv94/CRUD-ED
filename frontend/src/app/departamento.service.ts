import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define una interfaz para el departamento
export interface Departamento {
    _id?: string; // Agregar _id opcional para la respuesta del backend
    codigo: number;
    nombre: string;
}

@Injectable({
    providedIn: 'root'
})
export class DepartamentoService {
    private apiUrl = 'http://localhost:3000/departamentos';

    constructor(private http: HttpClient) { }

    getDepartamentos(): Observable<Departamento[]> {
        return this.http.get<Departamento[]>(this.apiUrl);
    }

    addDepartamento(departamento: Departamento): Observable<Departamento> {
        return this.http.post<Departamento>(this.apiUrl, departamento);
    }

    updateDepartamento(id: string, departamento: Departamento): Observable<Departamento> {
        return this.http.put<Departamento>(`${this.apiUrl}/${id}`, departamento);
    }

    deleteDepartamento(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
