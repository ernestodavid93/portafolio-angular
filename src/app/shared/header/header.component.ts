import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPagService } from '../../services/info-pag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor(public infoPagService: InfoPagService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  
  // tslint:disable-next-line:typedef
  buscarProducto(termino: string){

    if (termino.length < 1) {

      return;
    }

    this.router.navigate(['/search', termino]);


    // console.log(termino);

  }

}
