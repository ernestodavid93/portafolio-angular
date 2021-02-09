import { Component, OnInit } from '@angular/core';
import { InfoPagService } from '../../services/info-pag.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public infoPagService: InfoPagService) { }

  ngOnInit(): void {
  }

}
