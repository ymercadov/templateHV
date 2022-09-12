import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfobasicoService } from '../../services/infobasico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Suscribir( email: string, opcion: number ){

    if(email.length < 4){
       return;
    }

    this.router.navigate(['send',email, opcion,'','',''])
    //  console.log(opcion)
      // console.log(email);
  }

}
