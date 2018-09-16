import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

import { ToastrService } from 'ngx-toastr';  // Toastr

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userProfile:any;  // Auth0 Profile
  isTrainer: boolean;

  auth0 = new auth0.WebAuth({
    clientID: 'nZlYvy5mdW4CuRlA47e52o6Kk7wsY1EL',
    domain: 'pocketown.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/profile',
    scope: 'openid'  // Get the ID
  });

  constructor(public router: Router, private toastr: ToastrService) {}

    public login(): void {  // Login
      this.auth0.authorize();
    }

    // ...
   public handleAuthentication(): void {
     this.auth0.parseHash((err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         window.location.hash = '';
         this.setSession(authResult);
         this.router.navigate(['/']);
         this.toastr.info('','Now You are logged in', {
           timeOut: 10000,
           extendedTimeOut: 5000
         });
       } else if (err) {
         this.router.navigate(['/home']);
           this.toastr.error('','Please Confirm your Email!', {
             timeOut: 15000,
             extendedTimeOut: 5000
           });
       }
     });
   }

   private setSession(authResult): void {
     // Set the time that the Access Token will expire at
     const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
     localStorage.setItem('access_token', authResult.accessToken);
     localStorage.setItem('id_token', authResult.idToken);
     localStorage.setItem('expires_at', expiresAt);
   }

   public logout(): void {
     // Remove tokens and expiry time from localStorage
     localStorage.removeItem('access_token');
     localStorage.removeItem('id_token');
     localStorage.removeItem('expires_at');
     // Go back to the home route
     this.router.navigate(['/']);
     if (this.userProfile){
       this.isTrainer = false;
     }
   }

   public isAuthenticated(): boolean {
     // Check whether the current time is past the
     // Access Token's expiry time
     const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
     return new Date().getTime() < expiresAt;
   }

   public getProfile(cb): void {  // Get Trainer Profile
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

}
