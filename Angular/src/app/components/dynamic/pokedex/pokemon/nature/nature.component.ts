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
  good: string;
  bad: string;
  nature: Nature;
  nature2: Nature;
  urlImage: string;
  family: string[];  // Pokemon Familiars

  constructor(private natureService: NatureService,
              private pokedexService: PokedexService) {
      this.urlImage = "../../../../../../assets/images/pokemon/";
   }

  ngOnInit() {
    this.nature = this.natureService.getNature(this.pokemon.nature);
    this.nature2 = this.natureService.getNature(this.pokemon.nature2);

    this.pokedexService.getFamily(this.pokemon.family)  // Get the Family of the Pokemon
     .subscribe(res => {
       this.family = res as any;  // Respond Server
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

}
