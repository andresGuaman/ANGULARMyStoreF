export class DetalleCarrito {
  detc_id?: number;
  detc_cantidad: number;
  detc_descuento: number;
  detc_iva: number;
  detc_subtotal: number;
  detc_valor_total: number;
  detc_valor_unitario: number;
  encc_id:number;
  pp_id: number;
  constructor(detc_cantidad: number, detc_descuento: number, detc_iva: number, detc_subtotal: number, detc_valor_total: number, detc_valor_unitario: number, encc_id:number, pp_id: number) {
    this.detc_cantidad = detc_cantidad;
    this.detc_descuento = detc_descuento;
    this.detc_iva = detc_iva;
    this.detc_subtotal = detc_subtotal;
    this.detc_valor_total = detc_valor_total;
    this.detc_valor_unitario = detc_valor_unitario;
    this.encc_id = encc_id;
    this.pp_id = pp_id;
  }
}
