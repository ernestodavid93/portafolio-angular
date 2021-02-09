import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pag.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPagService {

  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) {

    // Leer el archivo JSON

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;
      console.log(resp);

    });


  }
}
