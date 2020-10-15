export class Empleado {
  emp_id?: number;
  emp_password: string;
  emp_salario: number;
  emp_usuario: string;
  //per_id: number;
  //rol_id: number;
  constructor(emp_password: string, emp_salario: number, emp_usuario: string/*, per_id: number, rol_id: number*/) {
    this.emp_password = emp_password;
    this.emp_salario = emp_salario;
    this.emp_usuario = emp_usuario;
  //  this.per_id = per_id;
    //this.rol_id = rol_id;
  }
}
