import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../reutilizar/moduloMaterial';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import {  } from '@angular/router';
import { BarraNavegacionComponent } from "../barra-navegacion/barra-navegacion.component"; // Importa RouterModule
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MaterialModule, RouterModule, MatIconModule, BarraNavegacionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  private snackBar = inject(MatSnackBar);
  

 
 /*  nombreUsuario: any;
  inicioSesion = false;

  logueado (){
    this.inicioSesion = true;
  }

   */

}
