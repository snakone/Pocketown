import { Component, OnInit, Output } from '@angular/core';

import { AuthService } from '../../../services/auth.service';  // Auth0 Service
import { TrainerService } from '../../../services/trainer.service';  // Trainer Service

import { Trainer } from '../../../models/trainer'; // Trainer Model

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService,
              public trainerService: TrainerService) {}

  ngOnInit() {
    // Only If Logged In with Auth0
    if (this.trainerService.firstLogin && this.authService.isAuthenticated()) {
      this.authService.getProfile((err, profile) => {  // Get the Profile
        // After We get the Trainer We check it
        this.trainerService.checkTrainer(profile);
      });
    }
  }

}

// MAIN Profile Component - Check Trainer and Login methods happens here
