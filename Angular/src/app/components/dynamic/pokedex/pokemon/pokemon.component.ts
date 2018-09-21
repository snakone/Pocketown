import { Component, OnInit, Output } from '@angular/core';

import { PokemonService } from '../../../../services/pokemon.service';  // Pokemon Service
import { PokedexService } from '../../../../services/pokedex.service';  // Pokedex Service
import { Pokemon } from '../../../../models/pokemon';  // Pokemon Model

import { ActivatedRoute } from '@angular/router'; // Routes


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Output() pokemon: Pokemon;  // Save selected Pokemon
  @Output() family: string[];  // Pokemon Family
  urlImage: string;

  constructor(private pokemonService: PokemonService,
              private pokedexService: PokedexService,
              private activeRoute: ActivatedRoute) {
              this.urlImage = "../../../../../assets/icons/";
             }

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params.pokemon; // Get the Pokemon ID from URL

    this.pokemonService.getPokemonbyName(routeParams)  // HTTP POST to Server with Pokemon ID
     .subscribe(res => {  // Subscribe to the Server Response
       this.pokemon = res[0] as Pokemon;  // Response as Pokemon
       console.log(this.pokemon);
       this.pokedexService.getFamily(this.pokemon.family)  // Get the Family of the Pokemon
        .subscribe(res => {
          this.family = res as any;  // Respond Server
        });
     });



  }

}
