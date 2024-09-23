import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define una interfaz para el empleado
export interface Empleado {
    _id?: string; // Agregar _id opcional para la respuesta del backend
    codigo: number;
    nombre: string;
    apellido1: string;
    apellido2: string;
    codigo_departamento: number;
}

@Injectable({
    providedIn: 'root'
})
export class EmpleadoService {
    private apiUrl = 'http://localhost:3000/empleados';

    constructor(private http: HttpClient) { }

    getEmpleados(): Observable<Empleado[]> {
        return this.http.get<Empleado[]>(this.apiUrl);
    }

    addEmpleado(empleado: Empleado): Observable<Empleado> {
        return this.http.post<Empleado>(this.apiUrl, empleado);
    }

    updateEmpleado(id: string, empleado: Empleado): Observable<Empleado> {
        return this.http.put<Empleado>(`${this.apiUrl}/${id}`, empleado);
    }

    deleteEmpleado(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
