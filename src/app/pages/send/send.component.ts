import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  nombre: string;
  email:  string;
  subject: string;
  mensaje: string;
  opcion: string;
  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {

    this.routes.params
    .subscribe(para => {
    
      this.nombre = para["nombre"] 
      this.email = para["email"] 
      this.subject = para["subject"] 
      this.mensaje = para["mensaje"] 
      this.opcion = para["opcion"] 
    
    
    
      console.log(para["nombre"]);
      console.log(para["opcion"]);
    })
  }

}
