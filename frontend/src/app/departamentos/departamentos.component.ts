import { Component, OnInit } from '@angular/core';
import { DepartamentoService, Departamento } from '../departamento.service'; // Asegúrate de importar la interfaz Departamento

@Component({
    selector: 'app-departamentos',
    templateUrl: './departamentos.component.html',
    styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
    departamentos: Departamento[] = []; // Especifica el tipo como Departamento[]
    nuevoDepartamento: Departamento = { codigo: 0, nombre: '' }; // Inicializa con 0

    constructor(private departamentoService: DepartamentoService) { }

    ngOnInit(): void {
        this.cargarDepartamentos();
    }

    cargarDepartamentos() {
        this.departamentoService.getDepartamentos().subscribe((data: Departamento[]) => {
            this.departamentos = data;
        });
    }

    agregarDepartamento() {
        this.departamentoService.addDepartamento(this.nuevoDepartamento).subscribe(() => {
            this.cargarDepartamentos();
            this.nuevoDepartamento = { codigo: 0, nombre: '' }; // Resetear formulario
        });
    }

    eliminarDepartamento(id: string) { // Especifica el tipo de id si es un string
        this.departamentoService.deleteDepartamento(id).subscribe(() => {
            this.cargarDepartamentos();
        });
    }
}
