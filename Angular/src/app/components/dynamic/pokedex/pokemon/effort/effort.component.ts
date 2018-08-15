import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model

@Component({
  selector: 'pokemon-effort',
  templateUrl: './effort.component.html',
  styleUrls: ['./effort.component.css']
})

export class EffortComponent implements OnInit {

  @Input() pokemon: Pokemon;
  urlImage: string;

  constructor() {
      this.urlImage = "../../../../../../assets/images/pokemon/";
  }

  ngOnInit() {

  }

}
