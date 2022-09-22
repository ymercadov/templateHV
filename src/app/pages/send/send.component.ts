import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  nombre : string;
  email:  string;
  subject: string;
  mensaje: string;
  opcion: number;
  constructor(private routes:ActivatedRoute,
              private router:Router) { 
                this.cargarInformacion()
                //this.cargarInformacion2();
              }

  ngOnInit() {
  }

  cargarInformacion()
  {
    const navigation = this.router.getCurrentNavigation();
    const info = navigation.extras.state as {
      email: string, opcion: number, nombre: string, subject: string, mensaje:string
     };

      this.nombre = info.nombre ;               
      this.email = info.email;
      this.subject = info.subject;
      this.mensaje = info.mensaje;
      this.opcion = info.opcion;   
  }

  cargarInformacion2()
  {
    this.routes.params
    .subscribe(para => {
    
      console.log(para);

      this.nombre = para["nombre"] 
      this.email = para["email"] 
      this.subject = para["subject"] 
      this.mensaje = para["mensaje"] 
      this.opcion = para["opcion"] 
      
      console.log(para["nombre"]);
      console.log(para["opcion"]);
    });
  }
}
