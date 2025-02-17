import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormularioUsuarioComponent } from "./componentes/usuarios/formulario-usuario/formulario-usuario.component";
import { ListaUsuarioComponent } from "./componentes/usuarios/lista-usuario/lista-usuario.component";
import { BarraNavegacionComponent } from "./componentes/barra-navegacion/barra-navegacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FormularioUsuarioComponent, ListaUsuarioComponent, BarraNavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoFinalAngular';
}
