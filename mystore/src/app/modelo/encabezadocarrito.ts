export class Encabezadocarrito {
  encc_id?: number;
  encc_descuento: number;
  encc_fecha: string;
  encc_iva: number;
  encc_subtotal: number;
  encc_total: number;
  cli_id: number;

  constructor(encc_descuento: number, encc_fecha: string, encc_iva: number, encc_subtotal: number, encc_total: number, cli_id: number) {
      this.encc_descuento= encc_descuento;
      this.encc_fecha = encc_fecha;
      this.encc_iva = encc_iva;
      this.encc_subtotal = encc_subtotal;
      this.encc_total = encc_total;
      this.cli_id = cli_id;
  }
}
