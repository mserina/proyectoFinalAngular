  import { Component, inject, Inject } from '@angular/core';
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


      // Inyección con la función inject()
      private formBuilder = inject(FormBuilder);
      private dialogoModificar = inject(MatDialogRef<FormularioModificarUsuarioComponent>);
      private data = inject(MAT_DIALOG_DATA);


    constructor() {
      console.log('Datos recibidos en el diálogo:', this.data); // Verificar qué datos llegan

      // Inicialización del formulario reactivo con validaciones
      this.modificarForm = this.formBuilder.group({
          campo: ['', Validators.required], // El campo a modificar
          nuevoValor: ['', Validators.required], // El nuevo valor que se asignará al campo
          tipo_usuario: [''] // Campo para el "tipo de usuario"
      });

      // Escuchar cambios en tipo_usuario para asegurarnos de que se guarda
      this.modificarForm.get('tipo_usuario')?.valueChanges.subscribe(value => {
        console.log('Tipo de usuario seleccionado:', value);
        this.modificarForm.get('nuevoValor')?.setValue(value);

      });

       this.modificarForm.get('campo')?.valueChanges.subscribe(value => {
        console.log('Campo seleccionado:', value);
        this.modificarForm.get('nuevoValor')?.setValue('');

      });
    }


  //Metodo que usa valdiaciones concretas dependiendo del campo que se quiera modificar
  aplicarValidaciones() {
    const campoSeleccionado = this.modificarForm.get('campo')?.value; 
    const nuevoValorControl = this.modificarForm.get('nuevoValor'); // Almacena el control del nuevo valor
  
    // Reseteamos las validaciones previas
    nuevoValorControl?.clearValidators();

    // Aplicamos validaciones según el campo seleccionado
    switch (campoSeleccionado) {
      case 'nombre_completo':
        nuevoValorControl?.setValidators([Validators.required, Validators.maxLength(50)]);
        break;
      case 'movil':
        nuevoValorControl?.setValidators([Validators.required, Validators.pattern(/^(\+34|0034|34)?[6-9]\d{8}$/)]);
        break;
      case 'correo_electronico':
        nuevoValorControl?.setValidators([Validators.required, Validators.email]);
        break;
      case 'contrasena':
        nuevoValorControl?.setValidators([Validators.required, Validators.minLength(6)]);
        break;
      case 'tipo_usuario':
        console.log('Tipo de usuario (validaciones) seleccionado:', nuevoValorControl);
        nuevoValorControl?.setValidators([Validators.required]);
        break;
      default:
        nuevoValorControl?.setValidators([Validators.required]);
    }
    
    //Actualiza la validacion
    nuevoValorControl?.updateValueAndValidity();
  }

    // Método para confirmar la modificación y cerrar el diálogo
    confirmar(): void {
      if (this.modificarForm.valid) { // Si el formulario es válido
        console.log('Valor del formulario:', this.modificarForm.value);
        this.dialogoModificar.close(this.modificarForm.value); // Devuelve el valor del formulario al componente principal
      }
    }

    // Método para cancelar la modificación y cerrar el diálogo sin realizar cambios
    cancelar(): void {
      this.dialogoModificar.close();
    }

  }
