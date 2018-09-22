import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';  // Auth0 Service
import { TrainerService } from '../../../services/trainer.service';  // Trainer Service

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService,
              private trainerService: TrainerService) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {  // Only If Logged In with Auth0
      this.authService.getProfile((err, profile) => {  // Get the Profile
      // After We get the Trainer We check it
      this.trainerService.fireTrainer = this.trainerService.checkTrainer(profile);
      if (this.trainerService.firstLogin) { // Update to Online Status only the First Time
        this.trainerService.updateTrainerOnlineStatus(true);
        this.trainerService.firstLogin = false;  // First Login = False
      }
      });
    }
  }

}

// MAIN Profile Component - Check Trainer and Login methods happens here
