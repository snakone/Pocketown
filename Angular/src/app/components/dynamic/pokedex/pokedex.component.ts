import { Component, OnInit } from '@angular/core';

import { PokedexService } from '../../../services/pokedex.service';
import { Pokemon } from '../../../models/pokemon';
import { Router } from '@angular/router'; // Router

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokedex: Pokemon[];
  urlImage: string;
  selectedPokemon: Pokemon;
  loading: boolean;

  constructor(private pokedexService: PokedexService,
              private router: Router) {
    this.urlImage = "../../../../assets/images/pokemon/";
    this.loading = true;
   }

  ngOnInit() {
     this.pokedexService.getPokemon()
      .subscribe(res => {
        const pokemonList = res as Pokemon[];
        this.pokedex = pokemonList;
        this.loading = false;
      })
  }

  navigate(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    this.router.navigate(['/pokedex', pokemon.name]);
  }

}
