import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Proyectos} from 'src/app/models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private URL = '/api/proyectos';

  constructor(private http: HttpClient) { }
  mostrarProyectos(): Observable<any> {
    return this.http.get(this.URL + '/all');
  }
  save(proyecto : Proyectos) : Observable<any>{
    return this.http.post(this.URL + "/save", proyecto)
  }
  editar(id: number,proyecto : Proyectos) : Observable<any>{
    return this.http.put(this.URL +"/"+ id + "/update", proyecto)
  }
  delete(id: number | undefined) : Observable<any>{
    return this.http.delete(this.URL +"/" + id+ "/delete")
  }
}
