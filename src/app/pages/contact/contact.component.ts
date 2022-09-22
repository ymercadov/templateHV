import { Component, OnInit } from '@angular/core';
import { InfobasicoService } from 'src/app/services/infobasico.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public infobasicoService:InfobasicoService,
              private router:Router) { }

  ngOnInit() {
  }

  enviarMensaje(txtnombre: string, txtemail: string, txtsubject: string, txtmensaje: string, opcion:number){
  
    const navigationExtra: NavigationExtras={
      state:{ email:txtemail, opcion:opcion, nombre:txtnombre, subject:txtsubject, mensaje:txtmensaje }

    }
    
    this.router.navigate(['send'],navigationExtra);    
    //this.router.navigate(['send',txtemail,opcion,txtnombre,txtsubject,txtmensaje])        

  }

}