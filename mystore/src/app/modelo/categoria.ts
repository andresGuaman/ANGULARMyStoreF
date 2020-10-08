export class Categoria {
  cat_id?: number;
  cat_categoria: string;
  cat_color: string;
  cat_edad: number;
  cat_genero: string;
  cat_marca: string;
  constructor(cat_categoria: string, cat_color: string, cat_edad: number, cat_genero: string, cat_marca: string) {
    this.cat_categoria = cat_categoria;
    this.cat_color = cat_color;
    this.cat_edad = cat_edad;
    this.cat_genero = cat_genero; 
    this.cat_marca = cat_marca;
  }
}
