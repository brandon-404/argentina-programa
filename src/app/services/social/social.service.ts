import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocialService {
  private URL = '/api/social';
  constructor(private http: HttpClient) { }
  mostrarRedSocial( name : string): Observable<any> {
    return this.http.get(this.URL + '/by/social_name/' + name);
  }
}
