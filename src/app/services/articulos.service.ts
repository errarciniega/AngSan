import { Injectable } from '@angular/core';
import { Articulo } from '../modelos/articulo';
import { articulosDB } from '../datos/articulosDB';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  public articulos: Articulo[]=articulosDB;

  constructor() { }

  public getArticulos()
  {
    return this.articulos;
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
