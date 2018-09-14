import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Trainer } from '../models/trainer';  // Trainer Model
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class TrainerService {

  isTrainer: boolean;  // To know whatever is Trainer or Not
  notTrainer: boolean;
  trainerID: string;  // Trainer ID
  trainer: Trainer;
  profile: any;  // Auth0 Profile
  readonly TRAINER_API = "http://localhost:3000/trainer";  // Server API Trainer

  // Heroku Server --> https://pocketown-server.herokuapp.com

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  addTrainer(trainer: Trainer){  // We add a Trainer
    return this.http.post(this.TRAINER_API, trainer);  // HTTP POST to Server API - POSTMAN belike
  }

  getTrainers() {
    return this.http.get(this.TRAINER_API);  // HTTP GET to Server API - POSTMAN belike
  }

  getTrainerbyId(id: string){  // URL/TrainerID

    return this.http.get(this.TRAINER_API + `/${id}`);  // HTTP GET to Server API - POSTMAN belike
  }

  checkTrainer(profile){
    const id = profile.sub.substring(6);  // Remove "Auth0|" from the ID
    this.trainerID = id;
    this.getTrainerbyId(id)  // Get Trainer by ID on MongoDb
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
