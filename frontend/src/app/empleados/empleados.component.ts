import { Component, OnInit } from '@angular/core';
import { EmpleadoService, Empleado } from '../empleado.service'; // Asegúrate de importar la interfaz Empleado

@Component({
    selector: 'app-empleados',
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
    empleados: Empleado[] = []; // Especifica el tipo como Empleado[]
    nuevoEmpleado: Empleado = { codigo: 0, nombre: '', apellido1: '', apellido2: '', codigo_departamento: 0 }; // Inicializa con 0

    constructor(private empleadoService: EmpleadoService) { }

    ngOnInit(): void {
        this.cargarEmpleados();
    }

    cargarEmpleados() {
        this.empleadoService.getEmpleados().subscribe((data: Empleado[]) => {
            this.empleados = data;
        });
    }

    agregarEmpleado() {
        this.empleadoService.addEmpleado(this.nuevoEmpleado).subscribe(() => {
            this.cargarEmpleados();
            this.nuevoEmpleado = { codigo: 0, nombre: '', apellido1: '', apellido2: '', codigo_departamento: 0 }; // Resetear formulario
        });
    }

    eliminarEmpleado(id: string) { // Especifica el tipo de id si es un string
        this.empleadoService.deleteEmpleado(id).subscribe(() => {
            this.cargarEmpleados();
        });
    }
}
