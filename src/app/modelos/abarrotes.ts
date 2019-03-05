import { Articulo } from './articulo';

export class Abarrotes implements Articulo {

    public nombre: string;
    public precio: number;
    public categoria: string;

    constructor()
    {
        this.categoria='abarrotes';
    }

    public imprimir(): string 
    {
        let nombre: string='Categoría';
        return nombre + ': ' + this.categoria;
    }

    public esAbarrotes(): boolean
    {
        return true;
    }
}