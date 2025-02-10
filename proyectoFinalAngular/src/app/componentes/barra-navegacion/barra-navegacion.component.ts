import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../reutilizar/moduloMaterial';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {

  private router = inject(Router);

  irARegistro() {
    const rutaActual = this.router.url; // Obtiene la ruta actual
    const rutaDestino = '/usuarios/nuevo';

    if (rutaActual !== rutaDestino) {
      this.router.navigate([rutaDestino]);
    }
  }

  irALogin() {
    this.router.navigate(['/login']); // Cambia la ruta según tu app
  }
}
