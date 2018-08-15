import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model

@Component({
  selector: 'pokemon-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  urlImage: string;
  urlPokemon: string;

  @Input() pokemon: Pokemon;

  constructor() {
        this.urlImage = "../../../../../../assets/images/items/";
        this.urlPokemon = "../../../../../../assets/images/pokemon/";
   }

  ngOnInit() { }

}
