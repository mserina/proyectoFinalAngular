import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../reutilizar/moduloMaterial';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../servicios/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [MaterialModule, RouterModule, CommonModule  ],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {

  mostrarMenu = false;  // Controla la visibilidad del menú de navegación
  private router = inject(Router); // Inyección del servicio Router para manejar la navegación dentro de la aplicación
  public auth = inject(AuthServiceService); // Inyección del servicio de autenticación 

  
/**
 * Método para redirigir al usuario a la página de registro.
 * 
 * - Obtiene la ruta actual en la que se encuentra el usuario.
 * - Define la ruta de destino (`/nuevo`).
 * - Si la ruta actual no es la misma que la de destino, entonces se ejecuta la navegación.
 * - Esto evita una redirección innecesaria si el usuario ya está en la página de registro.
 */
irARegistro() {
  const rutaActual = this.router.url; // Obtiene la URL actual
  const rutaDestino = '/nuevo'; // Define la URL a la que queremos dirigirnos

  if (rutaActual !== rutaDestino) { // Verifica si ya estamos en la página de destino
    this.router.navigate([rutaDestino]); // Navega a la página de registro
  }
}

/**
 * Método para redirigir al usuario a la página de login.
 * 
 * - Obtiene la ruta actual en la que se encuentra el usuario.
 * - Define la ruta de destino (`/login`).
 * - Si la ruta actual no es la misma que la de destino, se realiza la navegación.
 * - Esto evita que la aplicación intente navegar innecesariamente si el usuario ya está en la página de login.
 */
irALogin() {
  const rutaActual = this.router.url; // Obtiene la URL actual
  const rutaDestino = '/login'; // Define la URL a la que queremos dirigirnos

  if (rutaActual !== rutaDestino) { // Verifica si ya estamos en la página de destino
    this.router.navigate([rutaDestino]); // Navega a la página de login
  }
}

/**
 * Método para cerrar sesión.
 * 
 * - Llama al servicio de autenticación para ejecutar la función `logout()`, 
 *   que se encargará de eliminar la sesión del usuario.
 */
irLogout() {
  this.auth.logout(); // Llama al servicio de autenticación para cerrar la sesión del usuario
}

  
}
