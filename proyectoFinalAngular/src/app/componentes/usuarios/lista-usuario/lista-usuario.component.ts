import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../servicios/api.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BarraNavegacionComponent } from "../../barra-navegacion/barra-navegacion.component";

@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  imports: [RouterLink, MatTableModule, CommonModule, BarraNavegacionComponent],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css',
})
export class ListaUsuarioComponent implements OnInit {
  
  private servicioApi = inject(ApiService);
  usuarios: any[] = [];

  ngOnInit(): void {
    this.obtenerUsuarios(); // Asegura que se ejecuta cuando el componente se carga
  }

  // Definir las columnas que se mostrarán en la tabla
  displayedColumns: string[] = [
    'nombreCompleto',
    'movil',
    'correoElectronico',
    'tipoUsuario',
    'contrasena',
    'acciones'
  ];

  obtenerUsuarios(): void {
    this.servicioApi.mostrarUsuariosTodos().subscribe({
      next: (usuariosGuardados) => {
        this.usuarios = usuariosGuardados;
        console.log('Usuarios cargados:', this.usuarios);
      },
      error: (error) => {
        console.error('Error al obtener datos:', error);
      },
      complete: () => {
        console.log('La llamada al servicio ha terminado');
      },
    });
  }

   // Método para eliminar un usuario
   eliminarUsuario(id: number): void {
    this.servicioApi.borrarUsuario(id).subscribe(response => {
      if (response.success) {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
      }
    });
  }

  // Método para editar un usuario (puedes agregar la lógica de edición)
  editarUsuario(id: number): void {
    console.log('Editar usuario con ID:', id);
    // Aquí puedes abrir un modal o redirigir a un formulario de edición
  }

  
}
