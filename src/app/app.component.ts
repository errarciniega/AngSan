import { Component } from '@angular/core';
import { Articulo, Abarrotes, Electronico, Samsung, Auto, Ford, Chevrolet } from './modelos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngSan';

  constructor()
  {
    let articulo: Articulo;

    let categoria = 'electronico';

    if(categoria == 'abarrotes')
    {
      articulo = new Abarrotes();
      console.log(articulo.imprimir())
    }

    if(categoria == 'electronico')
    {
      articulo = new Electronico();
      console.log(articulo.imprimir())
    }

    let samsung: Samsung = new Samsung();
    console.log(samsung.getCategoria());

    let ford: Auto=new Ford();
    console.log(ford.motor);
  }
}