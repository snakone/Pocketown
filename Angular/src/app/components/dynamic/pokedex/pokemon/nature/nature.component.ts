import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model
import { Nature } from '../../../../../models/nature';  // Pokemon Model
import { NatureService } from '../../../../../services/nature.service';  // Nature Service
import { PokedexService } from '../../../../../services/pokedex.service';  // Pokedex Service

@Component({
  selector: 'pokemon-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() family: string[];  // Pokemon Familiars
  good: string;
  bad: string;
  nature: Nature;
  nature2: Nature;
  urlImage: string;

  constructor(private natureService: NatureService,
              private pokedexService: PokedexService) {
      this.urlImage = "../../../../../../assets/images/pokemon/";
   }

  ngOnInit() {
    this.nature = this.natureService.getNature(this.pokemon.nature);  // Get Nature 1 from the Service
    this.nature2 = this.natureService.getNature(this.pokemon.nature2);  // Get Nature 2 from the Service

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

// Child Component of Pokemon. Display Pokemon Nature
