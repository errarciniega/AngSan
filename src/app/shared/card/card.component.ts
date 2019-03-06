import { Component, OnInit, Input } from '@angular/core';
import { Articulo} from '../../modelos/articulo';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() articulo: Articulo;

  constructor() { }

  ngOnInit() {
  }

}
