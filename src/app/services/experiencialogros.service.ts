import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { experiencialogros } from '../interfaces/experiencialogros.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExperiencialogrosService {

  experienciaLogros: experiencialogros[] = [];
  cargando = true;
  constructor(private http: HttpClient) { this.CargarInformacion(); }

  private CargarInformacion()
  {
     this.http.get('https://datosbasicos-782fb-default-rtdb.firebaseio.com/ExperiLogros.json')
     .subscribe((resp: experiencialogros[]) =>{
       this.experienciaLogros = resp.reverse();
       this.cargando = false;
      console.log(this.experienciaLogros);
     })
  }

}
