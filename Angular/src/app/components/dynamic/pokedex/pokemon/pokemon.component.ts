import { Component, OnInit } from '@angular/core';

import { PokedexService } from '../../../../services/pokedex.service';
import { Pokemon } from '../../../../models/pokemon';

import { ActivatedRoute, Router } from '@angular/router'; // Routes

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokedex: Pokemon[];
  selectedPokemon: Pokemon;

  constructor(private pokedexService: PokedexService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params.pokemon; // Get the ID from URL

    this.pokedexService.getPokemon()
     .subscribe(res => {
       const pokemonList = res as Pokemon[];
       this.pokedex = pokemonList.filter(function(element){ // Filter
        return element.name == routeParams; // Pokemon ID
        });
      this.selectedPokemon = this.pokedex[0];
     })
  }

}