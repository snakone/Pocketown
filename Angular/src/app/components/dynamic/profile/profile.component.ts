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
        // After We get the Profile We check it
        this.trainerService.checkTrainer(this.authService.userProfile);

        let status = {  // Status Online - Offline We send to Server
          online: true,
          trainerID: this.trainerService.trainerID
        };
          this.trainerService.updateStatus(status).subscribe(res => {});  // Update Status Online

    } else if (this.authService.isAuthenticated()) {  // The User is Authenticated?
      this.authService.getProfile((err, profile) => {  // Get the Profile
      // After We get the Profile We check it
      this.trainerService.checkTrainer(profile);

      let status = { // Status Online - Offline We send to Server
        online: true,
        trainerID: this.trainerService.trainerID
      };
          this.trainerService.updateStatus(status).subscribe(res => {});  // Update Status Online
      });
    }
  }

}
