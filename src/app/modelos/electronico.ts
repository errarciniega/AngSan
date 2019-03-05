import { Articulo } from './articulo';

export class Electronico implements Articulo {

    public nombre: string;
    public precio: number;
    public categoria: string;

    constructor()
    {
        this.categoria = 'electronico';
    }

    public imprimir(): string 
    {
        let nombre: string ='Categoría';
        return nombre + ': ' + this.categoria;
    }

    public esElectronico(): boolean
    {
        return true;
    }
}
