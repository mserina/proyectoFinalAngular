import { Routes } from '@angular/router';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { ListaUsuarioComponent } from './componentes/usuarios/lista-usuario/lista-usuario.component';
import { FormularioUsuarioComponent } from './componentes/usuarios/formulario-usuario/formulario-usuario.component';
import { LoginUsuarioComponent } from './componentes/usuarios/login-usuario/login-usuario.component';
import { loginGuard } from './guards/authLogin';

export const routes: Routes = [

  { path: '', component: LandingPageComponent, canActivate: [loginGuard] },                          // Ruta para la página de inicio
  { path: 'usuarios', component: ListaUsuarioComponent },                 // Ruta para la lista de usuarios
  { path: 'usuarios/nuevo', component: FormularioUsuarioComponent },      // Ruta para el formulario de nuevo usuario
  { path: 'usuarios/editar/:id', component: FormularioUsuarioComponent }, // Ruta para editar un usuario
  { path: 'usuarios/login', component: LoginUsuarioComponent },  
  { path: '**', redirectTo: '' }      
];
