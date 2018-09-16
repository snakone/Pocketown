import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Trainer } from '../models/trainer';  // Trainer Model
import { Pokemon } from '../models/pokemon';
import { AuthService } from './auth.service';  // Auth Service

@Injectable({
  providedIn: 'root'
})

export class TrainerService {

  isTrainer: boolean;  // To know whatever is Trainer or Not
  notTrainer: boolean;
  trainerTeam: Pokemon[]=[];
  trainerID: string;  // Trainer ID
  trainer: Trainer;  // Trainer Profile
  admin:boolean = false;
  profile: any;  // Auth0 Profile
  readonly TRAINER_API = "http://localhost:3000/trainer";  // Server API Trainer

  // Heroku Server --> https://pocketown-server.herokuapp.com

  constructor(private http: HttpClient,
              private authService: AuthService) {
                this.admin = false;  // Start Admin at False
               }

  addTrainer(trainer: Trainer){  // We add a Trainer
    return this.http.post(this.TRAINER_API, trainer);  // HTTP POST to Server API - POSTMAN belike
  }

  getTrainers() {
    return this.http.get(this.TRAINER_API);  // HTTP GET to Server API - POSTMAN belike
  }

  getTrainerbyId(id: string){  // URL/TrainerID

    return this.http.get(this.TRAINER_API + `/${id}`);  // HTTP GET to Server API - POSTMAN belike
  }

  updateStatus(status){  // We update Status
      let trainer = {
        online: status.online
    }
      return this.http.put(this.TRAINER_API + `/${this.trainerID}`, trainer);  // HTTP PUT to Server API - POSTMAN belike
  }

  checkTrainer(profile){
    const id = profile.sub.substring(6);  // Remove "Auth0|" from the ID
    this.trainerID = id;
    this.getTrainerbyId(id)  // Get Trainer by ID on MongoDb
    .subscribe(res => {
      if (res == '') {  // No Result? No Trainer
        this.notTrainer = true;
        this.admin = false;
      }
      else {
        this.trainer = res[0] as Trainer;  // Always get 1 result so its possition 0
        if (this.trainer.trainerID == id) {  // If Auth0 ID = TrainerID
         this.isTrainer = true;  // Result? Trainer = True
         this.notTrainer = false;
         }
          // Admin Assignament
          if (this.trainer.name == 'Snakone' || this.trainer.name == 'Goph') {
                this.admin = true;
          } else this.admin = false;
      } // End of else
   });
  }

  addPokemontoTeam(pokemon:Pokemon){
    this.trainerTeam.push(pokemon);
    console.log(this.trainerTeam);
  }

  trainerAuthenticated(){
    return this.isTrainer;
  }


}
