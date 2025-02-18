
// ---- Este archivo sirve para impirtar modulos de Angular Material ----- //

// Importamos NgModule desde @angular/core para poder crear un módulo en Angular
import { NgModule } from '@angular/core';


// Modulos de Angular Material
import { MatListModule } from '@angular/material/list';          
import { MatSelectModule } from '@angular/material/select';      
import { MatInputModule } from '@angular/material/input';       
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatMenuModule } from '@angular/material/menu';          
import { MatButtonModule } from '@angular/material/button';      
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';




// Definimos un array que contiene todos los módulos de Angular Material que vamos a usar
const material = [
  MatListModule,       // Módulo de listas para mostrar elementos en formato de lista
  MatFormFieldModule,  // Módulo de campos de formulario, proporciona estilos y funcionalidades para inputs
  MatInputModule,      // Módulo de inputs de Angular Material, permite capturar datos del usuario
  MatSelectModule,     // Módulo de listas desplegables (select), permite seleccionar opciones predefinidas
  MatMenuModule,       // Módulo de menús desplegables para la interfaz de usuario
  MatButtonModule,     // Módulo de botones estilizados con Material Design
  MatToolbarModule,    // Módulo de barras de herramientas, útil para encabezados y menús de navegación
  MatDialogModule,     // Módulo para cuadros de diálogo modales (pop-ups)
  MatTableModule,      // Módulo de tablas, permite mostrar datos en formato tabular
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
