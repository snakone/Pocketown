import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  types: string[];

  constructor() {

    this.types = ["Normal", "Fire", "Water", "Electric", "Grass",
                  "Ice", "Ground", "Flying", "Ghost", "Rock",
                  "Fighting", "Poison", "Psychic", "Bug", "Dark",
                  "Steel", "Fairy"];
   }

  ngOnInit() {
  }

}
