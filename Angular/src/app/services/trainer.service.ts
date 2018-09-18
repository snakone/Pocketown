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
  notTrainer: boolean;  //  We use a second so it doesnt' depend from the first one
  admin: boolean;  // To know whatever is Admin or Not
  trainerTeam: Pokemon[]=[];
  trainerID: string;  // Trainer ID
  trainer: Trainer;  // Trainer Profile
  selectedTrainer: Trainer;  // Save Selected Trainer
  trainerList: Trainer[];  // Trainer List

  readonly TRAINER_API = "http://localhost:3000/trainer";  // Server API Trainer
  readonly TRAINER_NAME_API = "http://localhost:3000/trainer/name";  // Server API Get Trainer by Name
  readonly STATUS_API = "http://localhost:3000/trainer/status";  // Server API Online Status

  // Heroku Server --> https://pocketown-server.herokuapp.com

  constructor(private http: HttpClient,
              private authService: AuthService) {
                this.admin = false;  // Start Admin at False
                this.selectedTrainer = <Trainer>{};
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

  getTrainerbyName(name: string){  // URL/trainer/name/TrainerName
    return this.http.get(this.TRAINER_NAME_API + `/${name}`);  // HTTP GET to Server API - POSTMAN belike
  }

  updateTrainer(trainer:Trainer){  // We update a Trainer
    return this.http.put(this.TRAINER_API + `/${trainer._id}`, trainer);  // HTTP PUT to Server API - POSTMAN belike
  }

  deleteTrainer(_id: string){  // To delete only need ID
    return this.http.delete(this.TRAINER_API + `/${_id}` );  // HTTP DELETE to Server API - POSTMAN belike
  }

  updateStatus(status){  // We update Status
      let trainerStatus = {
        online: status.online
    } // HTTP PUT to Server API - POSTMAN belike
      return this.http.put(this.STATUS_API + `/${this.trainerID}`, trainerStatus);
  }

  checkTrainer(profile){  // Profile from Auth0 containing unique ID
    const id = profile.sub.substring(6);  // Remove "Auth0|" from the ID
    this.trainerID = id;
    this.getTrainerbyId(id)  // Get Trainer by ID on MongoDB
    .subscribe(res => {
      if (res == '') {  // No Result? No Trainer
        this.notTrainer = true;
        this.isTrainer = false;  // Trainer = False
      }
      else {
        this.trainer = res[0] as Trainer;  // Always get 1 result so its possition 0
        if (this.trainer.trainerID == id) {  // If Auth0 ID = TrainerID on MongoDB
         this.isTrainer = true;  // Result? Trainer = True
         this.notTrainer = false;
         }
         // Status Online We send to Server
         let status = {online: true};

         if (this.trainer.online == false) { // Only Update to Online if Trainer is Offline
              this.updateStatus(status).subscribe(res => {});  // Update Status Online
         }
        // Admin Assignament
         this.trainer.name == 'Snakone' || this.trainer.name == 'Goph'
         ? this.admin = true : this.admin = false;
      } // End of Else
   }); // End of Subscribe
  }

  addPokemontoTeam(pokemon:Pokemon){
    this.trainerTeam.push(pokemon);
  }


}
