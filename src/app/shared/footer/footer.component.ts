import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    public botones:any[]=[
      { name: 'Boton 1' },
      { name: 'Boton 2' },
      { name: 'Boton 3' }];

    public promotion: boolean = true;
    public color: boolean = false;

    public aplicarPromocion()
    {
      this.color = !this.color;
    }

  constructor() { }

  ngOnInit() {
  }

}
