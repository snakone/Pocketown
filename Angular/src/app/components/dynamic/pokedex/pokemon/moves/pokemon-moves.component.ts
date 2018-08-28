import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model
import { Move } from '../../../../../models/move';  // Pokemon Model

import { MoveService } from '../../../../../services/move.service';  // Nature Service

@Component({
  selector: 'pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
  styleUrls: ['./pokemon-moves.component.css']
})

export class PokemonMovesComponent implements OnInit {

  @Input() pokemon: Pokemon;
  urlImage: string;
  urlzMove: string;
  moves: string[];

  constructor(private moveService: MoveService) {
      this.urlImage = "../../../../../../assets/images/pokemon/";
      this.urlzMove = "../../../../../../assets/images/zmoves/";
   }

  ngOnInit() {
    this.moves = [this.pokemon.move1, this.pokemon.move2, this.pokemon.move3, this.pokemon.move4]
    this.moveService.getMoveTypebyName(this.moves)
     .subscribe(res => {
      this.moves = res as string[];
     })

  }

}
