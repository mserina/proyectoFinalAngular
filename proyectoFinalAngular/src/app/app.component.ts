import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioUsuarioComponent } from "./componentes/usuarios/formulario-usuario/formulario-usuario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoFinalAngular';
}
