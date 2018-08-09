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
  urlImage: string;

  constructor(private staticData: StaticService,
              private filter: FilterService,
              private router: Router) {

                this.urlImage = "../../../../assets/images/pokemon/";  }

  ngOnInit() {
  this.filterType = this.staticData.selectedType;  // Get the Type from the Service
  this.filterStat = this.staticData.selectedStat;  // Get the Stat from the Service
  this.filter.filterPokemon(this.filterType,
                            this.filterStat)  // Filter Pokemon with the Type and Stat
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

  ngOnDestroy() {  // Type and Stat 0 on exit
    this.staticData.selectedType = "";
    this.staticData.selectedStat = "";
  }

}
