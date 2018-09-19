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
  urlImage: string;

  constructor(private staticData: StaticService,
              private filter: FilterService,
              private router: Router) {

              this.urlImage = "../../../../assets/images/pokemon/";  }

  ngOnInit() {
  // Checking - Need to know on the Result if None were clicked
  if (this.staticData.selectedType == "") this.staticData.selectedType = "Any";
   // Filter Pokemon with the Type, Stat and Evolution
  this.filter.filterPokemon(this.staticData.selectedType,
                            this.staticData.selectedStat,
                            this.staticData.selectedEvolution)
   .subscribe(res =>{
     this.pokemonResult = res as Pokemon[];  // Response as Pokemon = List
   })
  }

  navigate(pokemon: Pokemon) {  // Navigate to Single Pokemon using Pokemon ID
    this.router.navigate(['/pokedex', pokemon._id]);
  }

  goBack(){
     window.history.back();  // Browser Back Action
  }

  ngOnDestroy() {  // Type, Stat and Evolution 0 on exit
    this.staticData.selectedType = "";
    this.staticData.selectedStat = "Nº";
    this.staticData.selectedEvolution = "Any";
    this.staticData.evolutionName = "Any";
    this.pokemonResult = [];
  }

}
