import { Component } from '@angular/core';
import { EmpleadosComponent } from './empleados/empleados.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadosComponent, DepartamentosComponent, FormsModule], // Combina todas las importaciones aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Cambia 'styleUrl' a 'styleUrls'
})
export class AppComponent {
  title = 'frontend';
}
