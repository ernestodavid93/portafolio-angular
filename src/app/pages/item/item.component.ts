import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../interfaces/productos.interface';
import { productosPort } from '../../interfaces/producto.portafolio';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: productosPort;
  id: string;



  http: any;

  constructor(private route: ActivatedRoute,
              public productoSer: ProductosService) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(parametros => {

      this.productoSer.getProducto(parametros.id)
        .subscribe( (producto: productosPort) => {

        this.producto = producto;
        this.id = parametros['id'];
        // console.log(producto);

        });

      // console.log(parametros.id);

    });
  }

 

}
