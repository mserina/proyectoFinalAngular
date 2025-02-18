import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../servicios/auth-service.service';  // Servicio para verificar autenticación y rol

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(): boolean {
    
    // Verifica si el usuario está autenticado y si es administrador
    if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
      return true;  // Si es admin y está autenticado, permite el acceso
    } else {
      console.log('❌ Acceso denegado. Debes ser admin.');
      this.router.navigate(['/login']);  // Si no es admin, redirige a la página de login
      return false;  // Bloquea el acceso
    }
  }
}
