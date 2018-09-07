import { Component, OnInit, Output } from '@angular/core';

import { PokemonService } from '../../../../services/pokemon.service';  // Pokedex Service
import { Pokemon } from '../../../../models/pokemon';  // Pokemon Model

import { ActivatedRoute } from '@angular/router'; // Routes


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Output() pokemon: Pokemon;  // Save selected Pokemon
  urlImage: string;
  family: string[];  // Pokemon Family

  constructor(private pokemonService: PokemonService,
              private activeRoute: ActivatedRoute) {

              this.urlImage = "../../../../../assets/icons/";
             }

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params.pokemon; // Get the Pokemon ID from URL
    this.pokemonService.getPokemonbyId(routeParams)  // HTTP POST to Server with Pokemon ID
     .subscribe(res => {  // Subscribe to the Server Response
       this.pokemon = res as Pokemon;  // Response as Pokemon
     })

  }

}
