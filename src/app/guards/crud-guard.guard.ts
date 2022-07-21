import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudGuardGuard implements CanActivate {
  bandera : boolean = false;
  constructor(private router: Router){}
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if( sessionStorage.getItem("token") != undefined ) {
        this.bandera = true;
      }
      else{
        this.router.navigate(['/']);
      }
    return this.bandera;
  }
  
}
