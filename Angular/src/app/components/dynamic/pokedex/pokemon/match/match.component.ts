import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model

import { PokedexService } from '../../../../../services/pokedex.service';  // Pokedex Service

import { PokemonService } from '../../../../../services/pokemon.service';  // Pokedex Service

@Component({
  selector: 'pokemon-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})

export class MatchComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() family: string[];  // Pokemon Familiars
  urlImage: string;
  good1: string; good2: string; good3: string;  // Good Pokemons
  bad1: string; bad2: string; bad3: string;  // Bad Pokemons

  constructor(private pokedexService: PokedexService,
              private pokemonService: PokemonService) {
      this.urlImage = "../../../../../../assets/images/pokemon/";
   }

  ngOnInit() {
      // Changing Evolution Number to String
      this.pokemon.evolution = this.pokedexService
       .evolutionToString(this.pokemon.evolution);
  }

  putSpaces(){
    // Replace "MegaCharizardX" into "Mega Charizard X"
    this.good1 = this.pokemon.good1.replace(/([A-Z])/g, " $1");
    this.good2 = this.pokemon.good2.replace(/([A-Z])/g, " $1");
    this.good3 = this.pokemon.good3.replace(/([A-Z])/g, " $1");
    this.bad1 = this.pokemon.bad1.replace(/([A-Z])/g, " $1");
    this.bad2 = this.pokemon.bad2.replace(/([A-Z])/g, " $1");
    this.bad3 = this.pokemon.bad3.replace(/([A-Z])/g, " $1");
  }

  goPokemon(familiar){
      this.pokemon = familiar;
      // Changing Evolution Number to String
      this.pokemon.evolution = this.pokedexService
       .evolutionToString(this.pokemon.evolution);
      this.putSpaces();  // Setting Spaces on Pokémon Name
  }

  getPokebyName(name: string) {
  this.pokemonService.getPokemonbyName(name)
     .subscribe(res =>{
       const pokemon = res[0] as any;  // We only get one result so its position 0
       this.pokemon = pokemon;
       this.putSpaces();  // Setting Spaces on Pokémon Name
     })
  }

}

// Child Component of Pokemon. Display Pokemon Good and Bad - 3 Good Pokemon - 3 Bad Pokemon
