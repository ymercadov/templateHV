import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { relacionherratipoherra } from '../interfaces/relacionherratipoherra.interface';
import { herramienta } from '../interfaces/herramienta.interface';
import { tipoherramienta } from '../interfaces/tipoherramienta.interface';

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {

  lstherramienta: herramienta[] = [];
  lsttipoHerramienta:tipoherramienta[];  
  tipoHerramientaFilter:tipoherramienta[];
  relaHerraTipoHerra: relacionherratipoherra;
  cargando = true;

  constructor(private http:HttpClient) { this.CargarInformacion()}

  private CargarInformacion(){
    this.http.get('https://datosbasicos-782fb-default-rtdb.firebaseio.com/Herramientas.json')
    .subscribe((respues: herramienta[])=>{
      this.lstherramienta = respues;
      // console.log(this.relaHerraTipoHerra.herramienta.id );
      this.CargarInformacionTipoHerramienta(this.lstherramienta);
      this.cargando = false;
      
    })
  }


  private CargarInformacionTipoHerramienta(_herramientas : herramienta[]) {
    this.http.get('https://datosbasicos-782fb-default-rtdb.firebaseio.com/TipoHerramientas.json')
    .subscribe((respues: tipoherramienta[])=>{      
      this.lsttipoHerramienta = respues;     
      this.cargando = false;        

      console.log(this.lsttipoHerramienta);


    });
  }

}
