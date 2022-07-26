import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Experiencia} from 'src/app/models/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  private URL = 'https://morning-dusk-12292.herokuapp.com/api/experiencia';
  constructor(private http: HttpClient) {}
  mostrarExperiencia(): Observable<any> {
    return this.http.get(this.URL + '/all');
  }
  mostrarExp(id : number) : Observable<any>{
    return this.http.get(this.URL + "/by/" + id)
  }

  saveExp(exp : Experiencia) : Observable<any>{
    return this.http.post(this.URL + "/save", exp)
  }
  editarExp(id: number,exp : Experiencia) : Observable<any>{
    return this.http.put(this.URL +"/"+ id + "/update", exp)
  }
  deleteExp(id: number | undefined) : Observable<any>{
    return this.http.delete(this.URL +"/" + id+ "/delete")
  }
}
