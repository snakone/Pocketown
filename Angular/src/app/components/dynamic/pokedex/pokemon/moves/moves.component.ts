import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model

@Component({
  selector: 'pokemon-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})

export class MovesComponent implements OnInit {

  @Input() pokemon: Pokemon;
  urlImage: string;
  urlzMove: string;

  constructor() {
      this.urlImage = "../../../../../../assets/images/pokemon/";
      this.urlzMove = "../../../../../../assets/images/zmoves/";
   }

  ngOnInit() {
    console.log(this.pokemon);
  }

}
