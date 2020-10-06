export class Cliente {
  cli_id?: number;
  cli_descuento: string;
  cli_password: string;
  cli_usuario: string;
  per_id: number;

  constructor(cli_descuento: string, cli_password: string, cli_usuario: string, per_id: number) {
    this.cli_descuento = cli_descuento;
    this.cli_password = cli_password;
    this.cli_usuario = cli_usuario;
    this.per_id = per_id;
  }
}
