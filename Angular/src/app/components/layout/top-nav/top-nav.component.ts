import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { TrainerService } from '../../../services/trainer.service';

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

  constructor(private authService: AuthService,
              private trainerService: TrainerService) {
    this.appTitle = "Pocketown";
    this.ngVersion = "Angular 6";
    this.logoURL = "../../../../../assets/images/logo.png";
  }

  ngOnInit() {}

  login(){
    this.authService.login();  // Log In with Auth0
  }

}

// Main Top Navigation of the App - Contains the MENU and the Profile icon
