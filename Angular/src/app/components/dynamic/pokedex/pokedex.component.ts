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

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
     this.pokedexService.getPokemon()
      .subscribe(res => {
        const pokemonList = res as Pokemon[];
        this.pokedex = pokemonList;
      })
  }

}
