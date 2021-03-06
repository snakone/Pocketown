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
                if (this.authService.isAuthenticated()) return true;
                else return false;
              }

}

// Auth Guard Service Block Routes, You need a Method that Return TRUE or FALSE
