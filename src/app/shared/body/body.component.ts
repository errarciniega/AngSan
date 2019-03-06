import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() description: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
