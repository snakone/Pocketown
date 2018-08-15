import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model
import { Nature } from '../../../../../models/nature';  // Pokemon Model
import { NatureService } from '../../../../../services/nature.service';  // Nature Service

@Component({
  selector: 'pokemon-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {

  @Input() pokemon: Pokemon;
  good: string;
  bad: string;
  nature: Nature;
  nature2: Nature;
  urlImage: string;

  constructor(private natureService: NatureService) {
      this.urlImage = "../../../../../../assets/images/pokemon/";
   }

  ngOnInit() {
    this.nature = this.natureService.getNature(this.pokemon.nature);
    this.nature2 = this.natureService.getNature(this.pokemon.nature2);
  }

}
