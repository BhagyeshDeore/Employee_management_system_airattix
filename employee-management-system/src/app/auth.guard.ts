import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './Service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (user && user.role) {
      const requiredRole = route.data['role'];
      
      if (requiredRole && user.role === requiredRole) {
        return true; // Allow access if the role matches
      } else {
        this.router.navigate(['/unauthorized']); // Redirect to an unauthorized page if the role doesn't match
        return false; // Deny access
      }
    }

    this.router.navigate(['/login']); // Redirect to login if no user is logged in
    return false; // Deny access
  }
}
