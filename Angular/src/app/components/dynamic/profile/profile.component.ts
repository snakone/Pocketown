import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';  // Auth0 Service
import { TrainerService } from '../../../services/trainer.service';  // Trainer Service

import { Trainer } from '../../../models/trainer';  // Trainer Model

import { ToastrService } from 'ngx-toastr';  // Toastr

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  isTrainer: boolean;  // To know whatever is Trainer or Not
  notTrainer: boolean;
  trainerID: string;  // Trainer ID
  trainer: Trainer;
  profile: any;  // Auth0 Profile

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private trainerService: TrainerService) { }

  ngOnInit() {
    if (this.authService.userProfile) { // If there's a Profile we Assign it
        this.profile = this.authService.userProfile;
        this.checkTrainer();  // After We get the Trainer We check it

    } else {  // No Profile?
      this.authService.getProfile((err, profile) => {  // Get the Profile
        this.profile = profile;
        this.checkTrainer();  // After We get the Trainer We check it
      });
    }
  }

  logout(){  // Logging Out
    this.authService.logout();
    this.toastr.info('','You are now logged out', {
      timeOut: 5000
    });
  }

  checkTrainer(){
    const id = this.profile.sub.substring(6);  // Remove "Auth0|" from the ID
    this.trainerService.getTrainerbyId(id)  // Get Trainer by ID on MongoDb
     .subscribe(res => {
       if (res == '') {  // No Result? No Trainer
         this.notTrainer = true;
       }
       else {
         this.trainer = res[0] as Trainer;  // Always get 1 result so its possition 0
         if (this.trainer.trainerID == id) {  // If Auth0 ID = TrainerID
          this.isTrainer = true;  // Result? Trainer = True
          this.notTrainer = false;
          }
           // Admin Assignament
           if (this.trainer.name == 'Snakone' || this.trainer.name == 'Goph') {
             this.authService.admin = true;
           }
       } // End of else
    });
  }

}
