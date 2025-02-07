export interface Usuario {
  id?: number;
  nombreCompleto: string;
  movil?: string;
  correoElectronico: string;
  tipoUsuario: string;
  contrasena: string;
  foto: string;
  token?: string;
  expiracionToken?: string;
}