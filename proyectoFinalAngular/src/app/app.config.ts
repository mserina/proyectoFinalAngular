import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes'; // Importar rutas de la aplicación


// Configuración global de la aplicación
export const entorno = {
  production: false,                 // Si el entorno es de desarrollo o producción
  apiUrl: 'http://localhost:9511/',  // URL base de la API
  tokenKey: 'claveToken',            // Nombre de la clave para almacenar el token en localStorage
  appTitle: 'Will Of D',   // Título de la aplicación
};


// Configuración de la aplicación Angular
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),  // Habilitar la detección de cambios optimizada
    provideRouter(routes),  // Proveer las rutas para la navegación
    provideAnimationsAsync(),  // Habilitar animaciones de forma asíncrona
  ],
};
