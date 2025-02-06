import { inject, Injectable } from '@angular/core';
import { entorno } from '../app.config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/articulo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

// URL base de la API concatenada con el endpoint de usuarios
  private apiUrl = entorno.apiUrl + 'usuario'; 
  

// Inyección de dependencia para usar HttpClient
  private http = inject(HttpClient);

  constructor() { }

  



  /**
  * Obtiene la lista de todos los usuarios desde la API
  * @returns Observable<Usuario[]> - Un array de usuarios en formato observable
  */
  mostrarUsuariosTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/registrar`);
  }




  /**
   * Obtiene un usuario específico por su ID
   * @param id - ID del usuario a buscar
   * @returns Observable<Usuario> - Datos del usuario en formato observable
   */
  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }




  /**
   * Crea un nuevo usuario enviando los datos a la API
   * @param usuario - Objeto con la información del usuario a crear
   * @returns Observable<Usuario> - Usuario creado con los datos devueltos por la API
   */
  crearNuevoUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }



  


  /**
   * Actualiza un usuario existente enviando los nuevos datos
   * @param id - ID del usuario a actualizar
   * @param usuario - correo del usuario / campo que se quiere actualizar / el nuevo valor del campo
   * @returns Observable<Usuario> - Usuario actualizado con los datos devueltos por la API
   */
  modificarUsuario(correoElectronico: string, campo: string, nuevoValor: string): Observable<any> {
    // Endpoint de la API
    const url = `${this.apiUrl}/modificar`;

    //Parametros para la peticion HTTP
    const params = new HttpParams()
      .set('correoElectronico', correoElectronico)
      .set('campo', campo)
      .set('nuevoValor', nuevoValor);
  
    return this.http.put(url, null, { params });
  }
  

  



  /**
   * Elimina un usuario de la API por su ID
   * @param id - ID del usuario a eliminar
   * @returns Observable<void> - Respuesta vacía si la eliminación fue exitosa
   */
  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/borrar/${id}`);
  }
}


