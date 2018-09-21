import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';  // Auth0 Service
import { TrainerService } from '../../../services/trainer.service';  // Trainer Service
import { Trainer } from '../../../models/trainer';  // Trainer Service

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  trainer: Trainer;

  constructor(private authService: AuthService,
              private trainerService: TrainerService) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {  // Only If Logged In with Auth0
      this.authService.getProfile((err, profile) => {  // Get the Profile
      // After We get the Trainer We check it
      this.trainerService.fireTrainer = this.trainerService.checkTrainer(profile);
      });
    }
  }

}
