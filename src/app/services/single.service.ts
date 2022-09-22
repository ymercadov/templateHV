import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infocomentario } from '../interfaces/comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class SingleService {

  comentario: infocomentario;
  cargando = true;
  constructor(private http:HttpClient) { 
    this.cargaComentarios()
  }


  cargaComentarios()
  { 
    this.http.get('https://datosbasicos-782fb-default-rtdb.firebaseio.com/Comentarios.json')
    .subscribe((resp: infocomentario) => {

      this.comentario = resp;
      this.cargando = false;
     // console.log(resp);
    })
  }
}
