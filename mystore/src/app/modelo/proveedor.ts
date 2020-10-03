export class  Proveedor{
  prov_id?: number;
  prov_empresa: string;
  prov_ruc: string;
  per_id: number;
  constructor(prov_empresa: string, prov_ruc: string, per_di: number) {
    this.prov_empresa = prov_empresa;
    this.prov_ruc = prov_ruc;
    this.per_id= per_id;
  }
}
