import { Routes } from '@angular/router';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { ListaUsuarioComponent } from './componentes/usuarios/lista-usuario/lista-usuario.component';
import { FormularioUsuarioComponent } from './componentes/usuarios/formulario-usuario/formulario-usuario.component';
import { LoginUsuarioComponent } from './componentes/usuarios/login-usuario/login-usuario.component';
import { loginGuard } from './guards/authLogin';
import { AdminGuard } from './guards/authAdmin';
import { MangaComponent } from './componentes/articulos/manga/manga.component';
import { FiguraComponent } from './componentes/articulos/figura/figura.component';
import { PosterComponent } from './componentes/articulos/poster/poster.component';

export const routes: Routes = [

  { path: '', component: LandingPageComponent }, // Ruta para la página de inicio
  { path: 'admin', component: ListaUsuarioComponent, canActivate: [AdminGuard] }, // Ruta para la lista de usuarios
  { path: 'nuevo', component: FormularioUsuarioComponent },  // Ruta para el formulario de nuevo usuario
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'manga', component: MangaComponent },    
  { path: 'figura', component: FiguraComponent },
  { path: 'poster', component: PosterComponent },
  { path: '**', redirectTo: '' }      
];
