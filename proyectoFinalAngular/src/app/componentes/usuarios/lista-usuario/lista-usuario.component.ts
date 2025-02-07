import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../servicios/api.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  imports: [RouterLink, MatTableModule, CommonModule],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css',
})
export class ListaUsuarioComponent implements OnInit {
  private servicioApi = inject(ApiService);
  usuarios = new MatTableDataSource<any>();

  // Definir las columnas que se mostrarán en la tabla
  displayedColumns: string[] = [
    'nombreCompleto',
    'movil',
    'correoElectronico',
    'tipoUsuario',
    'foto',
  ];

  obtenerUsuarios(): void {
    this.servicioApi.mostrarUsuariosTodos().subscribe({
      next: (usuariosGuardados) => {
        this.usuarios.data = usuariosGuardados;
        console.log('Usuarios cargados:', this.usuarios.data);
      },
      error: (error) => {
        console.error('Error al obtener datos:', error);
      },
      complete: () => {
        console.log('La llamada al servicio ha terminado');
      },
    });
  }

  ngOnInit(): void {
    this.obtenerUsuarios(); // 🔥 Asegura que se ejecuta cuando el componente se carga
  }
}
