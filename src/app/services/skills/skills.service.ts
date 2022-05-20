import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Skills} from 'src/app/models/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private URL = '/api/skills';
  constructor(private http: HttpClient) {}
  mostrarSkills(): Observable<any> {
    return this.http.get(this.URL + '/all');
  }
  save(skill : Skills) : Observable<any>{
    return this.http.post(this.URL + "/save", skill)
  }
  editar(id: number,skill : Skills) : Observable<any>{
    return this.http.put(this.URL +"/"+ id + "/update", skill)
  }
  delete(id: number | undefined) : Observable<any>{
    return this.http.delete(this.URL +"/" + id+ "/delete")
  }
}
