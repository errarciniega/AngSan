import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    /*public botones:any[]=[
      { name: 'Boton 1' },
      { name: 'Boton 2' },
      { name: 'Boton 3' }];*/

    public promotion: boolean = true;
    public color: boolean = false;
    @Output() onEliminar: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onSeleccionar: EventEmitter<boolean> = new EventEmitter<boolean>();

    public aplicarPromocion()
    {
      this.color = !this.color;
    }

    public eliminar()
    {
      this.onEliminar.emit(true);
    }

    public Seleccionar()
    {
      this.onSeleccionar.emit(true);
    }
  constructor() { }

  ngOnInit() {
  }

}
