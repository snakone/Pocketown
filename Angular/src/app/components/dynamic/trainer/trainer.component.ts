import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../../services/trainer.service';  // Trainer Service

import { Trainer } from '../../../models/trainer';  // Trainer Model

import { ActivatedRoute } from '@angular/router'; // Routes

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  trainer: Trainer;
  urlPokemon: string;
  urlImage: string;

  constructor(private trainerService: TrainerService,
              private activeRoute: ActivatedRoute) {
                this.urlPokemon = "../../../../assets/images/pokemon/";
                this.urlImage = "../../../../assets/images/avatar/";
              }

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params.name; // Get the Trainer Name from URL
    this.trainerService.getTrainerbyName(routeParams)  // HTTP POST to Server with Trainer name
     .subscribe(res => {  // Subscribe to the Server Response
       this.trainer = res[0] as Trainer;  // Response as Trainer
     })
  }

}
