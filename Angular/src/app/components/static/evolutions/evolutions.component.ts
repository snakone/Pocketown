import { Component, OnInit } from '@angular/core';

import { StaticService } from '../../../services/static.service';  // Static Service

@Component({
  selector: 'pokemon-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.css']
})
export class EvolutionsComponent implements OnInit {

  evolutions: string[];


  constructor(public staticData: StaticService) {}

  ngOnInit() {
      this.evolutions = this.staticData.evolutions;  // Get the Evolution List
  }

  showEvolution(id: string, evolution: string){
    this.staticData.selectedEvolution = id;  // Evolution ID
    this.staticData.evolutionName = evolution;  // Evolution Name
    }
}

// PlaceHolder Component to Display Pokemon Evolutions. On Click the selected Evolution is assigned to the Service.
