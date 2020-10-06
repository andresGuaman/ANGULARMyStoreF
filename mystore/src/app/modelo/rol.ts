export class Rol {
  rol_id?: number;
  rol_departamento: string;
  rol_estado: string;
  rol_nombre: string;

  constructor(rol_departamento: string, rol_estado: string, rol_nombre: string) {
    this.rol_departamento = rol_departamento;
    this.rol_estado = rol_estado;
    this.rol_nombre = rol_nombre;
  }
}
