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
  urlImage: string;
  family: string[];  // Pokemon Familiars

  constructor(private pokedexService: PokedexService) {
    this.urlImage = "../../../../../../assets/images/pokemon/";
  }

  ngOnInit() {
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
