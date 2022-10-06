import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infopersona } from '../interfaces/infopersona.interface';

@Injectable({
  providedIn: 'root'
})
export class InfobasicoService {

  persona: infopersona
  cargando = true;
  constructor(private http: HttpClient) {
    this.CargarInformacion();
   }

   private CargarInformacion()
  {
     this.http.get('https://datosbasicos-782fb-default-rtdb.firebaseio.com/Info.json')
     .subscribe((resp: infopersona) =>{
       this.persona = resp;
       this.cargando = false;
      console.log(this.persona)
     })
  }

  
}
