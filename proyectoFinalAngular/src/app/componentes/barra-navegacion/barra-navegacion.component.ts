import { Component } from '@angular/core';
import { MaterialModule } from '../../reutilizar/moduloMaterial';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {

}
