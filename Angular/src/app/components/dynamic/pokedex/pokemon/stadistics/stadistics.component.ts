import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model
import { PokedexService } from '../../../../../services/pokedex.service';  // Pokedex Service

@Component({
  selector: 'pokemon-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.css']
})

export class StadisticsComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() family: string[];  // Pokemon Familiars
  urlImage: string;

  constructor(private pokedexService: PokedexService) {
    this.urlImage = "../../../../../../assets/images/pokemon/";
  }

  ngOnInit() {
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

}

// Child Component of Pokemon. Display Pokemon Stadistics - Stat bars
