import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = '/api/users';
  constructor(private http: HttpClient) { }
  mostrarUsuario(): Observable<any> {
    return this.http.get(this.URL + '/all');
  }
}
