import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [FormsModule]  // Asegúrate de importar FormsModule aquí
})
export class RegisterComponent {
  nombre: string = '';
  cedula: string = '';
  fechaNacimiento: string = '';
  email: string = '';
  contrasena: string = '';

  constructor(private http: HttpClient) {}

  register() {
    const user = {
      nombre: this.nombre,
      cedula: this.cedula,
      fechaNacimiento: this.fechaNacimiento,
      email: this.email,
      contrasena: this.contrasena
    };

    this.http.post('http://localhost:5000/api/register', user)
      .subscribe(response => {
        console.log(response);
        alert('Usuario registrado con éxito');
      }, error => {
        console.error(error);
        alert('Error al registrar el usuario');
      });
  }
}
