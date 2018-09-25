import { Component, OnInit} from '@angular/core';

import { TrainerService } from '../../../../services/trainer.service';  // Trainer Service

import { Trainer } from '../../../../models/trainer';  // Trainer Model
import { Pokemon } from '../../../../models/pokemon';  // Pokemon Model


@Component({
  selector: 'trainer-profile',
  templateUrl: './profile-trainer.component.html',
  styleUrls: ['./profile-trainer.component.css']
})

export class ProfileTrainerComponent implements OnInit {

  trainer: Trainer;  // Trainer from MongoDB
  urlImage: string;



  constructor(private trainerService: TrainerService) {
            this.urlImage = "../../../../../assets/icons/";
          }

  ngOnInit() {}

}

// Single Profile Component. Display Data from the Trainer
