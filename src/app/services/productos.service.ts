import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargado = true;
  productos: Productos[] = [];
  productosFiltrado: Productos[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();
  }

  // tslint:disable-next-line:typedef
  private cargarProductos(){

    return new Promise<void>( (resolve, reject) => {

      this.http.get('https://portafolio-html-6c46f-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Productos[]) => {

        // console.log(resp);
        this.productos = resp;
        this.cargado = false;
        resolve();

      });

    });
  }

   // tslint:disable-next-line:typedef
   getProducto(id: string){

    return this.http.get(`https://portafolio-html-6c46f-default-rtdb.firebaseio.com/productos/${ id }.json`);
   }

   // tslint:disable-next-line:typedef
   buscarProducto(termino: string){

    if (this.productos.length === 0){

      // Cargar los productos

      this.cargarProductos().then( () => {
        // ejecutar despues de tener los prodcutos con then
        // aplicar filtro.
      this.filtrarProductos(termino);

      });

    } else {

      // Aplicar filtro.
      this.filtrarProductos(termino);

    }


    // console.log(this.productosFiltrado);
   }

   // tslint:disable-next-line:typedef
   private filtrarProductos(termino: string) {

    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const toLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino) >= 0 || toLower.indexOf( termino) >= 0) {
        this.productosFiltrado.push(prod);
      }


    });


   }


}
