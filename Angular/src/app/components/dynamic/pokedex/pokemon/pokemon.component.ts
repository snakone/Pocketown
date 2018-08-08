import { Component, OnInit } from '@angular/core';

import { PokedexService } from '../../../../services/pokedex.service';  // Pokedex Service
import { Pokemon } from '../../../../models/pokemon';  // Pokemon Model

import { ActivatedRoute } from '@angular/router'; // Routes

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokedex: Pokemon[];  // Pokedex List
  selectedPokemon: Pokemon;  // Save selected Pokemon
  urlImage: string;

  constructor(private pokedexService: PokedexService,
              private activeRoute: ActivatedRoute) {

              this.urlImage = "../../../../../assets/images/";
             }

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params.pokemon; // Get the Pokemon ID Name from URL
    this.pokedexService.getPokemonbyId(routeParams)  // HTTP POST to Server with Pokemon ID
     .subscribe(res => {  // Subscribe to the Server Response
       this.selectedPokemon = res as any;  // Response as Pokemon = List
     })
  }

}
