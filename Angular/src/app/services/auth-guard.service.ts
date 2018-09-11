import { Injectable } from '@angular/core';

import { Router, ActivatedRouteSnapshot,
         RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(next:ActivatedRouteSnapshot,
              state: RouterStateSnapshot){

    if ( this.authService.isAuthenticated() ){
      return true;
    } else {
      console.error("Bloqueado el Guard");
      return false;
    }

  }
}
