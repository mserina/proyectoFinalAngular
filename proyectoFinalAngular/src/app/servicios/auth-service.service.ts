import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private servicioApi = inject(ApiService); // Inyectamos el servicio API para obtener los usuarios
  private router = inject(Router); // Inyectamos el Router para navegar entre páginas
  private usuarioAutenticado: any; // Variable para almacenar el usuario autenticado
  private snackBar = inject(MatSnackBar);
  

  constructor() {}

  /**
   * Método para iniciar sesión
   * @param email - Correo del usuario
   * @param password - Contraseña del usuario
   * @returns Promise<boolean> - Retorna `true` si el usuario es válido, `false` si no lo es
   */
  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.servicioApi.mostrarUsuariosTodos().subscribe({
        next: (usuariosGuardados) => {
          // Filtramos el usuario con las credenciales proporcionadas
          const usuarioEncontrado = usuariosGuardados.find(user => user.correoElectronico === email && user.contrasena === password);

          if (usuarioEncontrado) {
            console.log('✅ Usuario autenticado:', usuarioEncontrado);
            this.usuarioAutenticado = usuarioEncontrado;
            localStorage.setItem('usuario', JSON.stringify(usuarioEncontrado)); // Guardamos en localStorage
            this.router.navigate(['']); // Redirigir a la página protegida
            resolve(true);
          } else {
            console.log('❌ Usuario no encontrado. Credenciales incorrectas.');
            resolve(false);
          }
        },
        error: (error) => {
          console.error('❌ Error al obtener usuarios:', error);
          reject(error);
        }
      });
    });
  }

  
  /**
   * Método para cerrar sesión
   */
  logout() {  
  if (this.isAuthenticated()) { // Verifica si hay una sesión activa
    this.snackBar.open("✅ Cierre de sesión exitoso. Usuario eliminado: " + this.usuarioAutenticado, 'Cerrar', { duration: 3000 });

    this.usuarioAutenticado = null; // Eliminamos el usuario autenticado
    localStorage.removeItem('usuario'); // Eliminamos la información del usuario del localStorage
    this.router.navigate(['login']); // Redirigimos al login
  } else {
    console.log("⚠️ No hay sesión activa para cerrar.");
    this.snackBar.open("⚠️ No hay sesión activa para cerrar.", 'Cerrar', { duration: 3000 });
  }
}



  /**
   * Método para verificar si hay un usuario autenticado
   * @returns boolean - `true` si hay un usuario autenticado, `false` si no lo hay
   */
  isAuthenticated(): boolean {
    console.log("aqui esta gurdado, " + localStorage.getItem('usuario'));
    return !!localStorage.getItem('usuario'); // Retorna `true` si hay un usuario en el localStorage
  }
  

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('usuario') || '{}');
    return user && user.tipoUsuario === 'admin';  // Verifica si el tipo de usuario es admin  
    }
}

