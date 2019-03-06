import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('titulo') title: string;

  public style: any = 
  {
    color: 'black', 'font-size': '20px'
  }

  @Input() categoria: string;

  constructor() { }

  ngOnInit() {
  }

}
