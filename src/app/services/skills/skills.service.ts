import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private URL = '/api/skills';
  constructor(private http: HttpClient) {}
  mostrarSkills(): Observable<any> {
    return this.http.get(this.URL + '/all');
  }
}
