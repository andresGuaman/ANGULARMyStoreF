export class Chat {
  chat_id?: number;
  chat_imagenes: string;
  chat_mensajes: string;
  cli_id: number;
  emp_id: number;

  constructor(chat_imagenes: string, chat_mensajes: string, cli_id: number, emp_id: number) {
    this.chat_imagenes= chat_mensajes;
    this.chat_mensajes = chat_mensajes;
    this.cli_id = cli_id;
    this.emp_id = emp_id;
  }
}
