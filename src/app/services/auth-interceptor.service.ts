import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService  implements HttpInterceptor {
  token : any;
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
     this.token = sessionStorage.getItem('token');
    let request = req;
    if (this.token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ this.token }`
        }
      });
    }
    return next.handle(request);
  }
}
