import { Component, OnInit } from '@angular/core';
import { HerramientasService } from '../../services/herramientas.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {

  constructor(private herramientasService: HerramientasService) { }

  ngOnInit() {
  }

}
