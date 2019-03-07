import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Articulo} from '../../modelos/articulo';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() articulo: Articulo;
  @Output() onQuitar: EventEmitter<number> = new EventEmitter<number>();
  @Output() onSeleccionar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public accionEliminar(event: boolean)
  {
    console.log("Evento capturado de footer");
    this.onQuitar.emit(this.articulo.id);
  }
  public accionSeleccionar(event: boolean)
  {
    console.log("Evento capturado de Estilo");
  }

  public ngOnDestroy()
  {
    console.log("Estoy eliminando no se que cojones");
  }
}
