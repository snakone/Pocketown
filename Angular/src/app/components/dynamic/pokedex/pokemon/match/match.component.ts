import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model

@Component({
  selector: 'pokemon-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})

export class MatchComponent implements OnInit {

  @Input() pokemon: Pokemon;
  urlImage: string;
  panelOpenState = false;

  constructor() {
      this.urlImage = "../../../../../../assets/images/pokemon/";
   }

  ngOnInit() {
  }

}
