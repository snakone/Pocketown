import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  appTitle: string;
  ngVersion: string;  // Angular Version
  appMail: string;  // Personal Mail

  logoURL: string;

  constructor(private authService: AuthService) {
    this.appTitle = "Pocketown";
    this.ngVersion = "Angular 6";
    this.logoURL = "../../../../../assets/images/logo.png";

    authService.handleAuthentication();  // Method Need to Log in with Auth0
  }

  ngOnInit() {}

  login(){
    this.authService.login();  // Log In with Auth0
  }

}
