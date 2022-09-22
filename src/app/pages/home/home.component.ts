import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfobasicoService } from '../../services/infobasico.service';
import { ExperiencialogrosService } from '../../services/experiencialogros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
              private experiencialogrosService:ExperiencialogrosService) { }

  ngOnInit() {
  }

  Suscribir( email: string, opcion: number ){

    if(email.length < 4){
       return;
    }
    this.router.navigate(['send'],{state:{email:email, opcion:opcion}});

  }

}
