export class Direccion {
  dir_id?: number;
  dir_calle1: string;
  dir_calle2: string;
  dir_ciudad: string;
  dir_latitud: string;
  dir_postal: string;
  dir_referencia: string;
  per_id: number;
  constructor(dir_calle1: string,dir_calle2: string, dir_ciudad: string, dir_latitud: string, dir_postal: string, dir_referencia: string, per_id: number) {
    this.dir_calle1 = dir_calle1;
    this.dir_calle2 = dir_calle2;
    this.dir_ciudad = dir_ciudad;
    this.dir_latitud = dir_latitud;
    this.dir_postal = dir_postal;
    this.dir_referencia= dir_referencia;
    this.per_id = per_id;
  }
}
