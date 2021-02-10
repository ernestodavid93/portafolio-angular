import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargado = true;
  productos: Productos[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();
  }

  // tslint:disable-next-line:typedef
  private cargarProductos(){

    this.http.get('https://portafolio-html-6c46f-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Productos[]) => {

        //console.log(resp);
        this.productos = resp;
        this.cargado = false;

      } );
  }
}
