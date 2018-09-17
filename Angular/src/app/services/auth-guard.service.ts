import { Injectable } from '@angular/core';

import { Router, ActivatedRouteSnapshot,
         RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(next:ActivatedRouteSnapshot,  // Method to Activate Component on Routes
              state: RouterStateSnapshot){

    if ( this.authService.isAuthenticated() ){ // Only Activated if User is Authenticated
      return true;
    } else {
      return false;
    }

  }
}
