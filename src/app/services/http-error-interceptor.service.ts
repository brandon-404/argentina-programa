import { Injectable } from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http';
import {throwError, catchError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(error => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          if(error.status === 401){
            this.router.navigate(['/']);
            Swal.fire('Su session expiro')
            sessionStorage.removeItem("token")
          }
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
        }
        return throwError(errorMessage);
      })
    );
  }
}
