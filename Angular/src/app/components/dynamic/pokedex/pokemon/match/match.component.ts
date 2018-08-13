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
  good1: string; good2: string; good3: string;
  bad1: string; bad2: string; bad3: string;
  panelOpenState = false;

  constructor() {
      this.urlImage = "../../../../../../assets/images/pokemon/";
   }

  ngOnInit() {
     this.good1 = this.pokemon.good1.replace(/(?<!^)([A-Z])/g, " $1");
     this.good2 = this.pokemon.good2.replace(/(?<!^)([A-Z])/g, " $1");
     this.good3 = this.pokemon.good3.replace(/(?<!^)([A-Z])/g, " $1");
     this.bad1 = this.pokemon.bad1.replace(/(?<!^)([A-Z])/g, " $1");
     this.bad2 = this.pokemon.bad2.replace(/(?<!^)([A-Z])/g, " $1");
     this.bad3 = this.pokemon.bad3.replace(/(?<!^)([A-Z])/g, " $1");
  }

}
