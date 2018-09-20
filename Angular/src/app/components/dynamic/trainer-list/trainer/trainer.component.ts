import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../../../services/trainer.service';  // Trainer Service

import { Trainer } from '../../../../models/trainer';  // Trainer Model
import { Pokemon } from '../../../../models/pokemon';  // Pokemon Model

import { ActivatedRoute } from '@angular/router'; // Routes
import { Router } from '@angular/router'; // Router

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
              private activeRoute: ActivatedRoute,
              private router : Router) {
                this.urlPokemon = "../../../../../assets/images/pokemon/";
                this.urlImage = "../../../../../assets/images/avatar/";
              }

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params.name; // Get the Trainer Name from URL
  }

  navigate(pokemon: Pokemon){
      this.router.navigate(['/pokedex', pokemon._id]);  // Navigate to Single Pokemon using Pokemon ID
  }

}
