import { Component, OnInit } from '@angular/core';

import { StaticService } from '../../../services/static.service';  // Static Service

@Component({
  selector: 'pokemon-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.css']
})
export class EvolutionsComponent implements OnInit {

  evolutions: string[];


  constructor(private staticData: StaticService) {}

  ngOnInit() {
      this.evolutions = this.staticData.evolutions;  // Get the Stats List
  }

  showEvolution(id: string, evolution: string){
    this.staticData.selectedEvolution = id;  // Evolution ID
    this.staticData.evolutionName = evolution;  // Evolution Name

    if (this.staticData.selectedType == "") // No Type selected? -> Any
    this.staticData.selectedType = "Any";

    }
}
