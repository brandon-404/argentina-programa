import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
