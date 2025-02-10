import { Component } from '@angular/core';
import { MaterialModule } from '../../reutilizar/moduloMaterial';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import {  } from '@angular/router';
import { BarraNavegacionComponent } from "../barra-navegacion/barra-navegacion.component"; // Importa RouterModule



@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MaterialModule, RouterModule, MatIconModule, BarraNavegacionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  constructor(private router: Router) {}

  irARegistro() {
    this.router.navigate(['/usuarios/nuevo']); // Cambia la ruta según tu app
  }

  irALogin() {
    this.router.navigate(['/login']); // Cambia la ruta según tu app
  }
}
