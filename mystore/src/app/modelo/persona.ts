export class Persona {
  per_id?: number;
  per_apellido: string;
  per_cedula: string;
  per_correo: string;
  per_estado: string;
  per_foto: string;
  per_nombre: string;
  per_telefono: string;
  constructor(per_apellido: string,per_cedula: string,per_correo: string,per_estado: string,per_foto: string,per_nombre: string,per_telefono: string) {
    this.per_apellido = per_apellido;
    this.per_cedula = per_cedula;
    this.per_correo = per_correo;
    this.per_estado = per_estado;
    this.per_foto = per_foto;
    this.per_nombre = per_nombre;
    this.per_telefono = per_telefono;
  }
}
