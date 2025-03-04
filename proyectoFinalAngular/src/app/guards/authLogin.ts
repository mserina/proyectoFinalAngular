import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import { AuthServiceService } from '../servicios/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export const loginGuard: CanActivateFn = () => {
  const auth = inject(AuthServiceService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);
  

  if (auth.isAuthenticated()) {
    snackBar.open('Bienvenido', 'Cerrar', { duration: 3000 }); 
    return true; // Permite el acceso si el usuario está autenticado

  } else {
    console.log('❌ Acceso denegado. Redirigiendo al login...');
    snackBar.open('Tiene que iniciar sesion', 'Cerrar', { duration: 3000 }); 
    router.navigate(['/login']); // Redirige a login si no está autenticado
    return false;
  }
};