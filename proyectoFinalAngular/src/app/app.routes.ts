import { Routes } from '@angular/router';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { ListaUsuarioComponent } from './componentes/usuarios/lista-usuario/lista-usuario.component';
import { FormularioUsuarioComponent } from './componentes/usuarios/formulario-usuario/formulario-usuario.component';
import { LoginUsuarioComponent } from './componentes/usuarios/login-usuario/login-usuario.component';
import { loginGuard } from './guards/authLogin';
import { AdminGuard } from './guards/authAdmin';

export const routes: Routes = [

  { path: '', component: LandingPageComponent, canActivate: [loginGuard] },        // Ruta para la página de inicio
  { path: 'admin', component: ListaUsuarioComponent, canActivate: [AdminGuard] },  // Ruta para la lista de usuarios
  { path: 'nuevo', component: FormularioUsuarioComponent },                       // Ruta para el formulario de nuevo usuario
  { path: 'editar/:id', component: FormularioUsuarioComponent },                  // Ruta para editar un usuario
  { path: 'login', component: LoginUsuarioComponent },  
  { path: '**', redirectTo: '' }      
];
