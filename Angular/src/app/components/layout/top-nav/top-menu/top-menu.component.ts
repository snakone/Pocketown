import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../services/auth.service';  // Auth0 Service
import { TrainerService } from '../../../../services/trainer.service';  // Trainer Service

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})

export class TopMenuComponent implements OnInit {

  constructor(private authService: AuthService,
              private trainerService: TrainerService) {}

  ngOnInit() {
    if (this.authService.userProfile) { // If there's a Profile we Assign it
        // After We get the Trainer We check it
        this.trainerService.checkTrainer(this.authService.userProfile);

    } else if (this.authService.isAuthenticated()) {  // No Profile?
      this.authService.getProfile((err, profile) => {  // Get the Profile
      // After We get the Trainer We check it
      this.trainerService.checkTrainer(profile);
      let status = {
        online: true,
        trainerID: this.trainerService.trainerID
      };
      this.trainerService.updateStatus(status).subscribe(res => {});

      });
    }
  }

}
