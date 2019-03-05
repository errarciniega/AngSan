import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string ="Titulo 1";

  public style: any = 
  {
    color: 'red', 'font-size': '20px'
  }

  public categoria: string = 'A';

  constructor() { }

  ngOnInit() {
  }

}
