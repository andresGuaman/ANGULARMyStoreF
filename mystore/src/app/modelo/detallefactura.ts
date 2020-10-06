export class DetalleCarrito {
  det_id?: number;
  det_cantidad: number;
  det_descuento: number;
  det_iva: number;
  det_subtotal: number;
  det_valor_total: number;
  det_valor_unitario: number;
  enc_id:number;
  pp_id: number;
  constructor(det_cantidad: number, det_descuento: number, det_iva: number, det_subtotal: number, det_valor_total: number, det_valor_unitario: number, enc_id:number, pp_id: number) {
    this.det_cantidad = det_cantidad;
    this.det_descuento = det_descuento;
    this.det_iva = det_iva;
    this.det_subtotal = det_subtotal;
    this.det_valor_total = det_valor_total;
    this.det_valor_unitario = det_valor_unitario;
    this.enc_id = enc_id;
    this.pp_id = pp_id;
  }
}
