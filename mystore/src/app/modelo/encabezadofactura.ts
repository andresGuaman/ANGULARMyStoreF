export class Encabezadofactura {
  enc_id?: number;
  enc_descuento: number;
  enc_fecha: string;
  enc_iva: number;
  enc_subtotal: number;
  enc_total: number;
  cli_id: number;
  met_id:number;


  constructor(enc_descuento: number, enc_fecha: string, enc_iva: number, enc_subtotal: number, enc_total: number, cli_id: number, met_id: number) {
      this.enc_descuento= enc_descuento;
      this.enc_fecha = enc_fecha;
      this.enc_iva = enc_iva;
      this.enc_subtotal = enc_subtotal;
      this.enc_total = enc_total;
      this.cli_id = cli_id;
      this.met_id = met_id;
  }
}
