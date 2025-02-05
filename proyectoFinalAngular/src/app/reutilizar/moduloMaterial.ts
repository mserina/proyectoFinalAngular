
// ---- Este archivo sirve para impirtar modulos de Angular Material ----- //



// Importamos NgModule desde @angular/core para poder crear un módulo en Angular
import { NgModule } from '@angular/core';


// Modulos de Angular Material
import { MatListModule } from '@angular/material/list';          // Para listas
import { MatSelectModule } from '@angular/material/select';      // Para listas desplegables (select)
import { MatInputModule } from '@angular/material/input';        // Para inputs de texto
import { MatFormFieldModule } from '@angular/material/form-field'; // Para envolver los campos de formulario
import { MatMenuModule } from '@angular/material/menu';          // Para menús (botones con opciones)
import { MatButtonModule } from '@angular/material/button';      // Para los botones estilizados de Angular Material



// Definimos un array que contiene todos los módulos de Angular Material que vamos a usar
const material = [
  MatListModule,       // Módulo de listas
  MatFormFieldModule,  // Módulo de campos de formulario
  MatInputModule,      // Módulo de inputs
  MatSelectModule,     // Módulo de listas desplegables
  MatMenuModule,       // Módulo de menús
  MatButtonModule      // Módulo de botones
];


// Usamos el decorador @NgModule para definir nuestro módulo personalizado
@NgModule({
  imports: [
    material   
  ],
  exports: [
    material   
  ]
})

// Creamos la clase MaterialModule, que ahora puede ser importada en otros módulos para utilizar los componentes de Angular Material
export class MaterialModule { }
