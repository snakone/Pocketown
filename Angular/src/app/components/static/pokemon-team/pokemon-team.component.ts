import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../../services/trainer.service';  // Trainer Service

import { Pokemon } from '../../../models/pokemon';  // Pokémon Model

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.css']
})

export class PokemonTeamComponent implements OnInit {

  pokemonTeam: Pokemon[];
  urlImage: string;

  constructor(public trainerService: TrainerService) {
          this.urlImage = "../../../../assets/images/pokemon/";
    }

  ngOnInit() {
  }

}

// PlaceHolder Component to Display Trainer Team.
