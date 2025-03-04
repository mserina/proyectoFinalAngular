import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import { AuthServiceService } from '../servicios/auth-service.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthServiceService);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true; // Permite el acceso si el usuario está autenticado
  } else {
    console.log('❌ Acceso denegado. Redirigiendo al login...');
    router.navigate(['login']); // Redirige a login si no está autenticado
    return false;
  }
};