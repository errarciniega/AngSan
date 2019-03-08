import { Injectable } from '@angular/core';
import { Articulo } from '../modelos/articulo';
import { articulosDB } from '../datos/articulosDB';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  public getArticulos()
  {
    return this.articulos;
  }

  public articulos: Articulo[] = articulosDB;

  public  get(id: number)
  {
    let articulo: Articulo = this.articulos.find((item: Articulo) => {return item.id == id;}); return articulo;
  }

  public nuevo(articulo)
  {
    this.articulos.push(articulo);
  }

  public borrar(articulo: Articulo)
  {
    for (let i = 0; i < this.articulos.length; i++)
    {
      if(articulo.id == this.articulos[i].id)
      {
        this.articulos.splice(i, 1);
      }
    }
  }
  public actualizar(articulo: Articulo)
  {
    for(let i=0; i < this.articulos.length; i++)
    {
      if(this.articulos[i].id == articulo.id)
      {
        this.articulos[i] = articulo;
      }
    }
  }
}
