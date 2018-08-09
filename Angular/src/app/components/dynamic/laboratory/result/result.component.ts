import { Component, OnInit, OnDestroy } from '@angular/core';

import { TypesService } from '../../../../services/types.service';  // Types Service
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

  constructor(private typeService: TypesService,
              private filter: FilterService,
              private router: Router) {

                this.urlImage = "../../../../assets/images/pokemon/";  }

  ngOnInit() {
  this.filterType = this.typeService.selectedType;
  this.filterStat = this.typeService.selectedStat;
  if (this.filterType == "") return false;  // No Type? No Filter :)
  if (this.filterStat == "Pokédex Nº") this.filterStat = "pokedex";
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
    this.typeService.selectedType = "Any";
    this.typeService.selectedStat = "Pokédex Nº";
  }

}
