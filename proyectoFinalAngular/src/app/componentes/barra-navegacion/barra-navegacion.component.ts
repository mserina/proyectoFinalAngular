import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../reutilizar/moduloMaterial';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../servicios/auth-service.service';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {

  mostrarMenu = false; // Inicialmente el menú está oculto
  private router = inject(Router);
  private auth = inject(AuthServiceService);

  irARegistro() {
    const rutaActual = this.router.url; // Obtiene la ruta actual
    const rutaDestino = '/usuarios/nuevo';

    if (rutaActual !== rutaDestino) {
      this.router.navigate([rutaDestino]);
    }
  }

  irALogin() {
    const rutaActual = this.router.url; // Obtiene la ruta actual
    const rutaDestino = '/usuarios/login';

    if (rutaActual !== rutaDestino) {
      this.router.navigate([rutaDestino]);
    }
  }

  irLogout() {
    this.auth.logout();
    
  }

  
}
