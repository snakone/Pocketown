import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model
import { PokedexService } from '../../../../../services/pokedex.service';  // Pokedex Service
import { Router } from '@angular/router'; // Router

@Component({
  selector: 'pokemon-effort',
  templateUrl: './effort.component.html',
  styleUrls: ['./effort.component.css']
})

export class EffortComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() family: string[];  // Pokemon Familiars
  urlImage: string;

  constructor(private pokedexService: PokedexService,
              private router: Router) {
      this.urlImage = "../../../../../../assets/images/pokemon/";
  }

  ngOnInit() {
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
