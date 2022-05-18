import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudios } from 'src/app/models/estudios';

@Injectable({
  providedIn: 'root'
})

export class EstudiosService {

  private URL = '/api/estudios'

  constructor(private http: HttpClient) { 
    
  }
  mostrarEstudios() : Observable<any>{

    return this.http.get(this.URL + "/all")
  }
  mostrarEstudio(id : number) : Observable<any>{
    return this.http.get(this.URL + "/by/" + id)
  }

  saveEstudio(estudio : Estudios) : Observable<any>{
    console.log(estudio);
    return this.http.post(this.URL + "/save", estudio)
  }
  editarEstudio(id: number,estudio : Estudios) : Observable<any>{
    return this.http.put(this.URL +"/"+ id + "/update", estudio)
  }
  deleteEstudio(id: number) : Observable<any>{
    return this.http.delete(this.URL +"/" + id+ "/delete")
  }
}

