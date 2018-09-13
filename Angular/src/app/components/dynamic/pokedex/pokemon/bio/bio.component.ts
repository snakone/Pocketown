import { Component, OnInit, Input } from '@angular/core';

import { PokedexService } from '../../../../../services/pokedex.service';  // Pokedex Service
import { TrainerService } from '../../../../../services/trainer.service';  // Trainer Service

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model
import { Trainer } from '../../../../../models/trainer';  // Trainer Model
import { Router } from '@angular/router'; // Router

@Component({
  selector: 'pokemon-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})

export class BioComponent implements OnInit {

  urlImage: string;
  family: string[];  // Pokemon Familiars
  pokemonTeam: Pokemon[];

  @Input() pokemon: Pokemon;

  constructor(private pokedexService: PokedexService,
              private trainerService: TrainerService,
              private router: Router) {
      this.urlImage = "../../../../../../assets/images/pokemon/";
    }

  ngOnInit() {
    this.pokedexService.getFamily(this.pokemon.family)  // Get the Family of the Pokemon
     .subscribe(res => {
       this.family = res as any;  // Respond Server as Family
     });

     // Changing Evolution Number to String
     this.pokemon.evolution = this.pokedexService
      .evolutionToString(this.pokemon.evolution);

  }

  goPokemon(familiar){
      this.pokemon = familiar;
      // Changing Evolution Number to String
      this.pokemon.evolution = this.pokedexService
       .evolutionToString(this.pokemon.evolution);
  }

  addPokemonToTeam(pokemon: Pokemon) {
    console.log(pokemon);
  }

}
