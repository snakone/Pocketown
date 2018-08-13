import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../../../../models/pokemon';  // Pokemon Model

@Component({
  selector: 'pokemon-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})

export class TypeComponent implements OnInit {

  urlImage: string;
  @Input() pokemon: Pokemon;

  constructor() {
        this.urlImage = "../../../../../../assets/images/pokemon/";
  }

  ngOnInit() {
  }

}
