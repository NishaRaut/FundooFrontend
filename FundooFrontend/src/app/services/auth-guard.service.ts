import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  })
  export class AuthguardService implements CanActivate {
  
  constructor(public auth: AuthService, public router: Router) { }
  
  canActivate(
  next: ActivatedRouteSnapshot,
  
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  if (!this.auth.isAuthenticated()) {
  this.router.navigate(['login']);
  return false;
  } else {
  return true;
  }
  }
}
