import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model

@Component({
  selector: 'pokemon-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.css']
})

export class StadisticsComponent implements OnInit {

  @Input() pokemon: Pokemon;
  urlImage: string;

  constructor() {
    this.urlImage = "../../../../../../assets/images/pokemon/";
  }

  ngOnInit() {

  }

}
