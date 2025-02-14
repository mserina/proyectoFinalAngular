import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-usuario.component.html',
  styleUrl: './login-usuario.component.css'
})
export class LoginUsuarioComponent {

  loginForm: FormGroup; // Definimos el formulario de login
  private constructorFormulario = inject(FormBuilder);
  
  constructor() {
    // Inicializamos el formulario de login
    this.loginForm = this.constructorFormulario.group({
      email: ['', [Validators.required, Validators.email]], // Campo para el email
      password: ['', [Validators.required, Validators.minLength(6)]] // Campo para la contraseña
    });
  }

  // Método para ejecutar el login cuando el formulario es válido
  mandarDatos() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value; // Obtenemos el email y la contraseña del formulario
    }
  }
}
