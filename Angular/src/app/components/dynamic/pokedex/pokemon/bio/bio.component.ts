import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model

@Component({
  selector: 'pokemon-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})

export class BioComponent implements OnInit {

  urlImage: string;

  @Input() pokemon: Pokemon;

  constructor() {
      this.urlImage = "../../../../../../assets/images/pokemon/";
    }

  ngOnInit() {
  }

}
