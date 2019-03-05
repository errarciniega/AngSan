import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public description: string = "Esta es la descripcion";
  public price: number = 12.99;

  constructor() { }

  ngOnInit() {
  }

}
