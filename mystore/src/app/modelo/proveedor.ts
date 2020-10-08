export class  Proveedor{
  prov_id?: number;
  prov_empresa: string;
  prov_ruc: string;
  constructor(prov_empresa: string, prov_ruc: string) {
    this.prov_empresa = prov_empresa;
    this.prov_ruc = prov_ruc;
  }
}
