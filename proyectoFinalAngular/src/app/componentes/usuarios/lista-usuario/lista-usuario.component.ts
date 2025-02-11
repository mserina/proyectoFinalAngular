import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../servicios/api.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BarraNavegacionComponent } from "../../barra-navegacion/barra-navegacion.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormularioModificarUsuarioComponent } from '../formulario-modificar-usuario/formulario-modificar-usuario.component';


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
  private _snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  

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






  //Metodo para recopilar usuarios
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
        this._snackBar.open('Usuario ' + id +", eliminado", 'Cerrar', { duration: 3000 });

      }
    });
  }





  // Método para modificar usuario
  modificarUsuario(usuario: any): void {
    // Abrimos el cuadro de diálogo para seleccionar el campo y el nuevo valor
      const dialogRef = this.dialog.open(FormularioModificarUsuarioComponent, {
      width: '350px',
      data: { usuario } // Le pasamos los datos del usuario al diálogo
    });

    // Cuando el diálogo se cierra, obtenemos el resultado
    dialogRef.afterClosed().subscribe(resultado => {
      // Si el usuario ha completado el formulario correctamente
      if (resultado) { 
        const { campo, nuevoValor } = resultado; // Obtenemos el campo y el nuevo valor ingresado

        // Llamamos al servicio para modificar el usuario
        this.servicioApi.modificarUsuario(usuario.correoElectronico, campo, nuevoValor).subscribe({
          next: () => {
            // Si todo va bien, mostramos un mensaje de éxito
            this._snackBar.open('Usuario modificado correctamente', 'Ok', { duration: 3000 });
            this.obtenerUsuarios(); // Refrescar la lista de usuarios tras la modificación
          },
          error: (error) => {
            // Si hay un error, mostramos un mensaje de error
            this._snackBar.open('Error al modificar el usuario', 'Cerrar', { duration: 3000 });
            console.error('Error en modificación:', error);
          }
        });
      }
    });
  }


  
}
