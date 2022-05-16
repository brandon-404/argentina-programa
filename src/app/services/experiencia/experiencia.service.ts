import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  private URL = '/api/experiencia';
  constructor(private http: HttpClient) {}
  mostrarExperiencia(): Observable<any> {
    return this.http.get(this.URL + '/all');
  }
}
