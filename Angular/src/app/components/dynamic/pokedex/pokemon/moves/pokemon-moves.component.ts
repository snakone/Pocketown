import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model
import { Move } from '../../../../../models/move';  // Pokemon Model

import { Router } from '@angular/router'; // Router

import { MoveService } from '../../../../../services/move.service';  // Nature Service
import { PokedexService } from '../../../../../services/pokedex.service';  // Pokedex Service

@Component({
  selector: 'pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.css']
})

export class PokemonMovesComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() family: string[];  // Pokemon Familiars
  urlImage: string;
  moves: string[];

  constructor(private moveService: MoveService,
              private pokedexService: PokedexService,
              private router: Router) {
      this.urlImage = "../../../../../../assets/images/pokemon/";
   }

  ngOnInit() {
     this.getMovesbyName();

      // Changing Evolution Number to String
      this.pokemon.evolution = this.pokedexService
       .evolutionToString(this.pokemon.evolution);
  }

  getMovesbyName(){
    this.moves = [this.pokemon.move1, this.pokemon.move2,
                  this.pokemon.move3, this.pokemon.move4];  // Assign Pokemon Moves

    this.moveService.getMoveTypebyName(this.moves) // Send Pokemon Moves to Server to know the Type
     .subscribe(res => {
      this.moves = res as string[];  // Moves now are Pokemon Move Types
     })
  }

  goPokemon(familiar){
      this.pokemon = familiar;
      // Changing Evolution Number to String
      this.pokemon.evolution = this.pokedexService
       .evolutionToString(this.pokemon.evolution);

      this.getMovesbyName();
  }

  navigate(move: Move) {
    this.router.navigate(['/moves', move._id]);  // Navigate to Single Move using Move ID
  }

}
