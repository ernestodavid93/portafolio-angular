import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pag.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPagService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {

   this.cargarInfo();
   this.cargarEquipo();

  }

  // tslint:disable-next-line:typedef
  private cargarInfo(){

    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;
      //console.log(resp);

    });

  }

  // tslint:disable-next-line:typedef
  private cargarEquipo(){

    this.http.get('https://portafolio-html-6c46f-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp;
      //console.log(resp);

    });

  }
}
