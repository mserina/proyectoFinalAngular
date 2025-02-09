import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../reutilizar/moduloMaterial';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BarraNavegacionComponent } from "../../barra-navegacion/barra-navegacion.component";

@Component({
  selector: 'app-formulario-usuario',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, BarraNavegacionComponent],
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css'
})
export class FormularioUsuarioComponent {

    private _snackBar = inject(MatSnackBar);
    private formBuilder = inject(FormBuilder);


    // Inicializamos el formulario con validaciones
    miFormularioUsuario = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(50)]],  // Nombre requerido, máximo 50 caracteres
      movil: ['', [Validators.required, Validators.pattern(/^(\+34|0034|34)?[6-9]\d{8}$/)]], // Validación para teléfono
      correoElectronico: ['', [Validators.required, Validators.email]],  // Correo electrónico requerido
      tipoUsuario: ['', Validators.required],  // Tipo de usuario requerido
      contrasena: ['', [Validators.required, Validators.minLength(6)]], // Contraseña mínima de 6 caracteres
    });
  

    // Método para comprobar si el formulario es válido
    onSubmit(): void {
      if (this.miFormularioUsuario.valid) { 
        this._snackBar.open('Usuario creado correctamente', 'Ok');
        console.log(this.miFormularioUsuario.value);  // Aquí manejarías la lógica de crear o editar el usuario
      } else {
        console.log('Formulario no válido');
      }
    }

    
    // Método para obtener las validaciones de cada campo
    get f() {
      return this.miFormularioUsuario.controls;
    }
}

