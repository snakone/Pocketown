import { Component, OnInit, OnDestroy } from '@angular/core';

import { StaticService } from '../../../../services/static.service';  // Types Service
import { FilterService } from '../../../../services/filter.service';  // Filter Service
import { Pokemon } from '../../../../models/pokemon';  // Pokemon Model
import { Router } from '@angular/router'; // Router

@Component({
  selector: 'lab-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {

  pokemonResult: Pokemon[];  // Pokemon List Result
  filterType: string;  // Type to filter
  filterStat: string;  // Stat to filter
  filterEvo: string;  // Evolution to filter
  evolutionName: string;  // Evolution Name
  urlImage: string;

  constructor(private staticData: StaticService,
              private filter: FilterService,
              private router: Router) {

                this.urlImage = "../../../../assets/images/pokemon/";  }

  ngOnInit() {
  this.filterType = this.staticData.selectedType;  // Get the Type from the Service
  this.filterStat = this.staticData.selectedStat;  // Get the Stat from the Service
  this.filterEvo = this.staticData.selectedEvolution;  // Get the Evolution from the Service
  this.evolutionName = this.staticData.evolutionName;  // Get the Evlution NAME from the Service

  // Checking - Need to know on the Result if None were clicked
  if (this.filterStat == "") this.filterStat = "Nº";
  if (this.evolutionName == "") this.evolutionName = "Any";

  this.filter.filterPokemon(this.filterType,
                            this.filterStat,
                            this.filterEvo)  // Filter Pokemon with the Type, Stat and Evolution
   .subscribe(res =>{
     this.pokemonResult = res as any;  // Response as Pokemon = List
   })
  }

  navigate(pokemon: Pokemon) {
    this.router.navigate(['/pokedex', pokemon._id]);  // Navigate to Single Pokemon using Pokemon ID
  }

  goBack(){
     window.history.back();  // Browser Back Action
  }

  ngOnDestroy() {  // Type, Stat and Evolution 0 on exit
    this.staticData.selectedType = "";
    this.staticData.selectedStat = "";
    this.staticData.selectedEvolution = "";
    this.staticData.evolutionName = "";
    this.pokemonResult = [];
  }

}
