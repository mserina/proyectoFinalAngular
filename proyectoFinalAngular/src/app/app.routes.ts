import { Routes } from '@angular/router';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { ListaUsuarioComponent } from './componentes/usuarios/lista-usuario/lista-usuario.component';
import { FormularioUsuarioComponent } from './componentes/usuarios/formulario-usuario/formulario-usuario.component';

export const routes: Routes = [

  { path: '', component: LandingPageComponent },                          // Ruta para la página de inicio
  { path: 'usuarios', component: ListaUsuarioComponent },                 // Ruta para la lista de usuarios
  { path: 'usuarios/nuevo', component: FormularioUsuarioComponent },      // Ruta para el formulario de nuevo usuario
  { path: 'usuarios/editar/:id', component: FormularioUsuarioComponent }, // Ruta para editar un usuario
  { path: '**', redirectTo: '' }      
];
