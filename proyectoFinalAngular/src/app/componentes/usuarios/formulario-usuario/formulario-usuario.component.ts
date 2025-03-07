import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../reutilizar/moduloMaterial';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../../servicios/api.service';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../modelos/Usuario';
import { AuthServiceService } from '../../../servicios/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-usuario',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css'
})
export class FormularioUsuarioComponent {

    private _snackBar = inject(MatSnackBar);
    private formBuilder = inject(FormBuilder);
    private servicioApi = inject(ApiService);
    private router = inject(Router); // Inyectamos el Router para navegar entre páginas

    

    // Inicializamos el formulario con validaciones
    miFormularioUsuario = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(50)]],  // Nombre requerido, máximo 50 caracteres
      movil: ['', [Validators.required, Validators.pattern(/^(\+34|0034|34)?[6-9]\d{8}$/)]], // Validación para teléfono
      correoElectronico: ['', [Validators.required, Validators.email]],  // Correo electrónico requerido
      tipoUsuario: [],  
      contrasena: ['', [Validators.required, Validators.minLength(6)]], // Contraseña mínima de 6 caracteres
    });
  
  

    // Método para comprobar si el formulario es válido y enviarlo al API
    onSubmit(): void {
      if (this.miFormularioUsuario.valid) { 
        
        // Obtener los valores del formulario y asignar valores predeterminados si están vacíos
        const nuevoUsuario: Usuario = {
          nombreCompleto: this.miFormularioUsuario.value.nombreCompleto || 'Usuario Anónimo',
          movil: this.miFormularioUsuario.value.movil || '000000000', // Valor predeterminado
          correoElectronico: this.miFormularioUsuario.value.correoElectronico || 'correo@ejemplo.com',
          tipoUsuario: this.miFormularioUsuario.value.tipoUsuario || 'usuario',
          contrasena: this.miFormularioUsuario.value.contrasena || '123456', // Valor predeterminado
          foto: 'default.jpg', // Se asigna una imagen por defecto
        };

        
        

        // Llamar al servicio para crear un nuevo usuario
        this.servicioApi.crearNuevoUsuario(nuevoUsuario).subscribe({
          next: () => {
            this._snackBar.open('Usuario Agregado', 'Cerrar', { duration: 3000 }); 
            this.miFormularioUsuario.reset(); // Resetear el formulario tras el registro
            this.router.navigate(['login']);
          },
          error: (error) => {
            this._snackBar.open('Error al crear el usuario', 'Cerrar', { duration: 3000 });
            console.error('Error al registrar usuario:', error);
          }
        });

      } else {
        this._snackBar.open('Por favor, completa todos los campos correctamente', 'Cerrar', { duration: 3000 });
        console.log('Formulario no válido');
      }
    }

    
    // Método para obtener las validaciones de cada campo
    get validation() {
      return this.miFormularioUsuario.controls;
    }
}

