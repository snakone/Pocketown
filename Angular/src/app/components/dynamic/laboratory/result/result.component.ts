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

  pokemonResult: Pokemon[];
  filterType: string;
  filterStat: string;
  urlImage: string;

  constructor(private staticData: StaticService,
              private filter: FilterService,
              private router: Router) {

                this.urlImage = "../../../../assets/images/pokemon/";  }

  ngOnInit() {
  this.filterType = this.staticData.selectedType;
  this.filterStat = this.staticData.selectedStat;
  this.filter.filterPokemon(this.filterType, this.filterStat)
   .subscribe(res =>{
     this.pokemonResult = res as any;  // Response as Pokemon = List
   })
  }

  navigate(pokemon: Pokemon) {
    this.router.navigate(['/pokedex', pokemon._id]);  // Navigate to Single Pokemon using Image NAME
  }

  goBack(){
     window.history.back();
  }

  ngOnDestroy() {
    this.staticData.selectedType = "";
    this.staticData.selectedStat = "";
  }

}
