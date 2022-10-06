import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { relacionherratipoherra } from '../interfaces/relacionherratipoherra.interface';
import { herramienta } from '../interfaces/herramienta.interface';
import { tipoherramienta } from '../interfaces/tipoherramienta.interface';
import { empleobusco } from '../interfaces/empleobusco.interface';

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {

  lstherramienta: herramienta[] = [];
  lsttipoHerramienta:tipoherramienta[];  
  tipoHerramientaFilter:tipoherramienta[];
  empleoBusco: empleobusco[];
  relaHerraTipoHerra: relacionherratipoherra;
  cargando = true;

  constructor(private http:HttpClient) { this.CargarInformacion()}

  private CargarInformacion(){
    this.http.get('https://datosbasicos-782fb-default-rtdb.firebaseio.com/Herramientas.json')
    .subscribe((respues: herramienta[])=>{
      this.lstherramienta = respues;
      // console.log(this.relaHerraTipoHerra.herramienta.id );
      this.CargarInformacionTipoHerramienta(this.lstherramienta);
      this.CargarEmpleoBusco();
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

  private CargarEmpleoBusco() {
    this.http.get('https://datosbasicos-782fb-default-rtdb.firebaseio.com/EmpleoBusco.json')
    .subscribe((respues: empleobusco[])=>{      
      this.empleoBusco = respues;     
      this.cargando = false;        

      console.log(this.empleoBusco);

    });
  }

}
