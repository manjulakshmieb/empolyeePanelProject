import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router:Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      const userJson:any = localStorage.getItem('adminlogin');
      const userDetails:any = JSON.parse(userJson);

      const isLoginRoute = state.url === '/';

      if (userDetails !== null) {
        if (isLoginRoute) {
          this.router.navigate(['/employee']);
          return false;
        }
        return true;
      } else {
        if (isLoginRoute) {
          return true;
        }
        this.router.navigate(['/']);
        return false;
      }
    }

     
  
  
}
