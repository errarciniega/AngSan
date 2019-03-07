import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ArticulosService } from '../../services/articulos.service';
import { Articulo } from '../../modelos/articulo';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticulosService]
})
export class AdminComponent implements OnInit {
  public articulos: Articulo[];

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
    public as: ArticulosService) { 

      this.articulos = as.articulos;
    }

  ngOnInit() {
  }

  public nuevo(template: TemplateRef<any>)
  {
    this.modalRef = this.modalService.show(template);
  }

  public agregar()
  {
    this.as.nuevo(
      {
        nombre: 'Pantallas',
        marca: 'Hisense',
        precio: 6500.00,
        title: 'Pantalla Hisense',
        description: '32 Pulgadas',
        promotion: true,
        categoria: 'E',
        url: 'assets/img/Hisense.jpg',
        id:7,
        fecha: new Date()
      }
    );
      this.articulos = this.as.articulos;
      this.modalRef.hide();
  }

  public borrar(art: Articulo)
  {
    console.log(art);
    this.as.borrar(art);
  }

}
