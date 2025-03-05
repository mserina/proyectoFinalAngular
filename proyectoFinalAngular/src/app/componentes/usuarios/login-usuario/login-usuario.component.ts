import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../servicios/api.service';
import { AuthServiceService } from '../../../servicios/auth-service.service';
import { MaterialModule } from '../../../reutilizar/moduloMaterial';


@Component({
  selector: 'app-login-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './login-usuario.component.html',
  styleUrl: './login-usuario.component.css'
})
export class LoginUsuarioComponent {

  loginForm: FormGroup; // Definimos el formulario de login
  private constructorFormulario = inject(FormBuilder);
  servicioApi = inject(ApiService);
  usuarios: any[] = [];
  private auth = inject(AuthServiceService);
  
  
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
      const { email, password } = this.loginForm.value; // Obtener valores del formulario
      this.auth.login(email, password).then(success => {
        if (!success) {
          console.log('❌ Credenciales incorrectas');
        }
      });
    }
  }
}


