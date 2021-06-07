import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  
  constructor(private authservice:AuthService,
    private toastrSrvice:ToastrService,
    private router:Router) {}

  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authservice.isAuthenticated()){
        return true;
      }else{
        this.router.navigate(['login'])
        this.toastrSrvice.info("Önce sisteme giriş yapmalısınız");
        return false;
      }
  }
  
}
