import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../reutilizar/moduloMaterial';
import { CommonModule } from '@angular/common'; // Necesario para pipes como titlecase

@Component({
  selector: 'app-formulario-modificar-usuario',
  standalone: true,
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-modificar-usuario.component.html',
  styleUrl: './formulario-modificar-usuario.component.css'
})
export class FormularioModificarUsuarioComponent {

  modificarForm: FormGroup; // Formulario reactivo para el diálogo
  camposDisponibles = ['nombre_completo', 'movil', 'correo_electronico', 'contrasena', 'tipo_usuario']; // Los campos que se pueden modificar

  constructor(
    public dialogoModificar: MatDialogRef<FormularioModificarUsuarioComponent>, // Para controlar el diálogo
    @Inject(MAT_DIALOG_DATA) public data: any, // Datos del usuario que se pasan desde el componente principal
    private formBuilder: FormBuilder // Servicio para crear el formulario reactivo
  ) {

    console.log('Datos recibidos en el diálogo:', data); // Verificar qué datos llegan


    // Inicialización del formulario reactivo con validaciones
    this.modificarForm = this.formBuilder.group({
      campo: ['', Validators.required], // El campo a modificar
      nuevoValor: ['', Validators.required] // El nuevo valor que se asignará al campo
    });
  }

  // Método para confirmar la modificación y cerrar el diálogo
  confirmar(): void {
    if (this.modificarForm.valid) { // Si el formulario es válido
      this.dialogoModificar.close(this.modificarForm.value); // Devuelve el valor del formulario al componente principal
    }
  }

  // Método para cancelar la modificación y cerrar el diálogo sin realizar cambios
  cancelar(): void {
    this.dialogoModificar.close();
  }

}
