import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'https://morning-dusk-12292.herokuapp.com/api/users';
  constructor(private http: HttpClient) { }
  mostrarUsuario(): Observable<any> {
    return this.http.get(this.URL + '/all');
  }
  save(usuario : User) : Observable<any>{
    return this.http.post(this.URL + "/save", usuario)
  }
  editar(id: undefined,usuario : User) : Observable<any>{
    return this.http.put(this.URL +"/"+ id + "/update", usuario)
  }
  delete(id: number | undefined) : Observable<any>{
    return this.http.delete(this.URL +"/" + id+ "/delete")
  }
  logg( myUser: User){
    return this.http.post(this.URL +"/loggin", myUser);
  }
}
