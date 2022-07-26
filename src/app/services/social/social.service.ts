import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RedSocial} from 'src/app/models/red-social'


@Injectable({
  providedIn: 'root'
})
export class SocialService {
  private URL = 'https://morning-dusk-12292.herokuapp.com/api/social';
  constructor(private http: HttpClient) { }
  
  mostrarTodos(): Observable<any>{
    return this.http.get(this.URL + "/all");
  }
  mostrarPorNombre( name : string): Observable<any> {
    return this.http.get(this.URL + '/by/social_name/' + name);
  }
  save(social : RedSocial) : Observable<any>{
    return this.http.post(this.URL + "/save", social)
  }
  editar(id: number,social : RedSocial) : Observable<any>{
    return this.http.put(this.URL +"/"+ id + "/update", social)
  }
  delete(id: number | undefined) : Observable<any>{
    return this.http.delete(this.URL +"/" + id+ "/delete")
  }
}
