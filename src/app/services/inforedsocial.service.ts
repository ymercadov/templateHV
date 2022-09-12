import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InforedsocialService {

  redSocial: any=[] = []
  cargando = true;
  
  constructor(private http: HttpClient) {
    this.CargarRedSocial();
   }

  private CargarRedSocial()
  {
     this.http.get('https://datosbasicos-782fb-default-rtdb.firebaseio.com/RedSocial.json')
     .subscribe((resp: any[]) =>{
       this.redSocial = resp;
       this.cargando = false;
       //console.log(resp)
     })
  }

}
