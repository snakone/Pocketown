import { Component, OnInit } from '@angular/core';

import { PokedexService } from '../../../services/pokedex.service';
import { Pokemon } from '../../../models/pokemon';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokedex: Pokemon[];
  urlImage: string;
  selectedPokemon: Pokemon;

  constructor(private pokedexService: PokedexService) {
    this.urlImage = "../../../../assets/images/pokemon/"
   }

  ngOnInit() {
     this.pokedexService.getPokemon()
      .subscribe(res => {
        const pokemonList = res as Pokemon[];
        this.pokedex = pokemonList;
      })
  }

  navigate(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    console.log(this.selectedPokemon);
  }

}
