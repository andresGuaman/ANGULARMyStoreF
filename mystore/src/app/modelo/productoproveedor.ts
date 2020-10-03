export class ProductoProveedor {
  pp_id?: number;
  pro_id: number;
  prov_id: number;
  constructor(pro_id: number, prov_id: number) {
    this.pro_id = pro_id;
    this.prov_id = prov_id;
  }
}
