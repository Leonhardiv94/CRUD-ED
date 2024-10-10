import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '/Users/leonh/Documents/CRUD 1/CRUD-ED/CRUD-ED/myStore/src/app/services/usuario.service'; // Asegúrate de tener este servicio creado e importado
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],  // Importa los módulos necesarios
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Configura el formulario reactivo
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      cedula: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Función que se llama al enviar el formulario
  onSubmit() {
    if (this.registroForm.valid) {
      // Llama al servicio para enviar los datos al backend
      this.usuarioService.registrarUsuario(this.registroForm.value)
        .subscribe(response => {
          console.log('Usuario registrado exitosamente', response);
        }, error => {
          console.error('Error al registrar usuario', error);
        });
    }
  }
}

