import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Trainer } from '../models/trainer';  // Pokemon Model

@Injectable({
  providedIn: 'root'
})

export class TrainerService {

  trainer: Trainer;  // Save selected Trainer
  readonly TRAINER_API = "http://localhost:3000/trainer";  // Server API Moves

  // Heroku Server --> https://pocketown-server.herokuapp.com

  constructor(private http: HttpClient) { }

  addTrainer(trainer: Trainer){  // We add a Move
    return this.http.post(this.TRAINER_API, trainer);  // HTTP POST to Server API - POSTMAN belike
  }

  getTrainerbyId(id: string){  // URL/MoveID
    return this.http.get(this.TRAINER_API + `/${id}`);  // HTTP GET to Server API - POSTMAN belike
  }
}
