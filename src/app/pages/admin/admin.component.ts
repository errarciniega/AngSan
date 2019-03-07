import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ArticulosService } from '../../services/articulos.service';
import { Articulo } from '../../modelos/articulo';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticulosService]
})
export class AdminComponent implements OnInit {
  public articulos: Articulo[];

  public formArticulo: FormGroup;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
    public as: ArticulosService) { 

      this.articulos = as.articulos;
    }

  ngOnInit() {
    
  this.formArticulo = new FormGroup(
    {
      nombre: new FormControl(null,[Validators.required]),
      marca: new FormControl(),
      precio: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      promotion: new FormControl(),
      categoria: new FormControl(),
      url: new FormControl(),
      id: new FormControl(null)
    }
  )
  }

  public nuevo(template: TemplateRef<any>)
  {
    this.modalRef = this.modalService.show(template);
    this.formArticulo.reset();
    this.formArticulo.patchValue({id: null});
  }


  public agregar()
  {
    if(this.formArticulo.value.id == null)
      {
        let articulo: Articulo = this.formArticulo.value;
        articulo.id = this.articulos.length + 1;
        this.as.nuevo(articulo);
        this.articulos = this.as.articulos;
        this.modalRef.hide();
      } else
      {
        let articulo: Articulo = this.formArticulo.value;
        this.as.actualizar(articulo);
        this.modalRef.hide();
      }

    
  }

  public editar(articulo: Articulo, template: TemplateRef<any>)
  {
    this.modalRef = this.modalService.show(template);
    this.formArticulo.patchValue(articulo);
  }

  public borrar(art: Articulo)
  {
    console.log(art);
    this.as.borrar(art);
  }

}
