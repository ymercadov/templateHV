import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperiencialogrosService } from '../../services/experiencialogros.service';
import { experiencialogros } from '../../interfaces/experiencialogros.interfaces';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent implements OnInit {

 public  detalleExperienciaLogros: experiencialogros

  constructor(private route:ActivatedRoute,
              private experiencialogrosService:ExperiencialogrosService ) { }

  ngOnInit() {
    this.route.params
    .subscribe(para =>  {
      this.experiencialogrosService.getExperienciaLogros(para['Id'])
      .subscribe((resp: experiencialogros) => {

        this.detalleExperienciaLogros = resp;
        console.log(this.detalleExperienciaLogros);
      });
    });
  }

}
