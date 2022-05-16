import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private URL = '/api/proyectos';

  constructor(private http: HttpClient) { }
  mostrarProyectos(): Observable<any> {
    return this.http.get(this.URL + '/all');
  }
}
