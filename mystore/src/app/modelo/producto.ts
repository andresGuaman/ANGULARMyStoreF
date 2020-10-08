export class Producto{
  pro_id?: number;
  pro_codigo_barra: string;
  pro_costo: number;
  pro_descripcion: string;
  pro_foto: string;
  pro_marca: string;
  pro_modelo: string;
  pro_precio: number;
  pro_stock: number;
  constructor(pro_codigo_barra: string, pro_costo: number, pro_descripcion: string, pro_foto: string, pro_marca: string, pro_modelo: string, pro_precio: number, pro_stock: number){
    this.pro_codigo_barra = pro_codigo_barra;
    this.pro_costo = pro_costo;
    this.pro_descripcion = pro_descripcion;
    this.pro_foto = pro_foto;
    this.pro_marca = pro_marca;
    this.pro_modelo = pro_modelo;
    this.pro_precio = pro_precio;
    this.pro_stock=pro_stock;
  }
}
