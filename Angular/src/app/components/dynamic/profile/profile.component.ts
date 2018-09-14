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
    if (this.authService.userProfile) { // If there's a Profile we Assign it
        // After We get the Trainer We check it
        this.trainerService.checkTrainer(this.authService.userProfile);

    } else {  // No Profile?
      this.authService.getProfile((err, profile) => {  // Get the Profile
      // After We get the Trainer We check it
      this.trainerService.checkTrainer(profile); 
      });
    }
  }

}
